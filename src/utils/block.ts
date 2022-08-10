import Handlebars = require('handlebars');
import { v4 as makeUUID } from 'uuid';

import EventBus from './event-bus';
import flatten from './flatten';

type BaseProps<T = {}> = Record<string, any> & {
  events?: Record<string, (event: any) => void>;
  children?: Array<Block>;
  id?: string;
} & T;

type Props<T> = Omit<BaseProps<T>, 'children'> | Record<string, never>;
type Children = Record<string, Block | Block[]> | Record<string, never>;

class Block<T = {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private selfElement: HTMLElement | null = null;

  private eventBus: () => EventBus;

  private readonly id: string | null = null;

  public children: Children;

  readonly props: Props<T>;

  constructor(propsAndChildren: BaseProps<T>) {
    const eventBus = new EventBus();
    const {
      children,
      props,
    } = this.getChildren(propsAndChildren);
    this.children = this.makeChildrenProxy(children);

    this.id = makeUUID();

    this.props = this.makePropsProxy(Object.assign(props, { id: this.id }));

    this.eventBus = () => eventBus;

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private getChildren(propsAndChildren: T): {
    children: Children;
    props: Props<T>
  } {
    const children: Children = {};
    const props = {} as Props<T>;

    Object.entries(propsAndChildren)
      .forEach(([key, value]) => {
        if (value instanceof Block || Array.isArray(value)) {
          children[key] = value;
        } else {
          props[key as keyof Props<T>] = value;
        }
      });

    return {
      children,
      props,
    };
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.selfComponentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.selfComponentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.selfRender.bind(this));
  }

  private addEvents() {
    const { events = {} } = this.props;

    Object.keys(events)
      .forEach((eventName) => {
        if (this.selfElement) {
          this.selfElement.addEventListener(eventName, events[eventName]);
        }
      });
  }

  private removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events)
      .forEach((eventName) => {
        if (this.selfElement) {
          this.selfElement.removeEventListener(eventName, events[eventName]);
        }
      });
  }

  init() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  private selfComponentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => item.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(oldProps?: T) {
  }

  dispatchComponentDidMount() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_CDM);
  }

  private selfComponentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.selfRender();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps?: T, newProps?: T) {
    return true;
  }

  setProps = (nextProps: Partial<Props<T>>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this.selfElement;
  }

  private selfRender() {
    const block = this.render() as unknown as Node;

    if (this.selfElement) {
      this.removeEvents();
      this.selfElement.replaceWith(block);
    }

    this.selfElement = block as HTMLElement;
    this.addEvents();
  }

  render() {}

  getContent() {
    return this.element;
  }

  private makeChildrenProxy(chidren: Children) {
    const self = this;

    return new Proxy(chidren, {
      get(target, prop: string) {
        const value = target[prop];
        return value;
      },
      set(target, prop: string, value) {
        // eslint-disable-next-line no-param-reassign
        target[prop as keyof Children] = value;

        // Запускаем обновление компоненты
        self.eventBus()
          .emit(Block.EVENTS.FLOW_CDU, self.props, self.props);
        return true;
      },
    });
  }

  private makePropsProxy(props: Props<T>) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldProps = { ...target };
        // eslint-disable-next-line no-param-reassign
        target[prop as keyof Props<T>] = value;

        // Запускаем обновление компоненты
        self.eventBus()
          .emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  compile(template: Handlebars.TemplateDelegate, props?: Props<T>) {
    const propsAndStubs: Record<string, string | string[]> = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = child.map((item) => `<div data-id="${item.id}"></div>`);
      } else {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      }
    });

    const fragment = this.createDocumentElement('template') as HTMLTemplateElement;

    fragment.innerHTML = template(propsAndStubs);

    flatten(Object.values(this.children)).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      if (stub) {
        const childContent = child.getContent();
        // stub.parentElement.appendChild(childContent);
        stub.replaceWith(childContent as Node);
      }
    });

    const firstElement = fragment.content.firstElementChild;
    if (firstElement) {
      firstElement.setAttribute('data-id', this.id as string);
    }

    return firstElement;
  }

  private createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    if (typeof this.id === 'string') {
      element.setAttribute('data-id', this.id);
    }
    return element;
  }
}

export default Block;
