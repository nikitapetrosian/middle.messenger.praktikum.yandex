import Block from '../../utils/block';
import Button from '../button';

import template from './modal.hbs';

import './modal.css';

type Props = {
  content: Block;
  closeButton?: Button;
  className?: string;
};

class Modal extends Block<Props> {
  constructor(props: Props) {
    const closeButton = new Button({
      text: 'X',
      theme: 'link',
      className: 'modal__close',
    });
    super({
      ...props,
      closeButton,
      events: {
        click: (event) => {
          const button = this.element?.querySelector('.modal__close');
          if (event.target === button) {
            this.hide();
          }
        },
      },
    });
  }

  hide = () => {
    this.getContent()?.classList.add('hidden');
  };

  show = () => {
    this.getContent()?.classList.remove('hidden');
  };

  render() {
    return this.compile(template, this.props);
  }
}

export default Modal;
