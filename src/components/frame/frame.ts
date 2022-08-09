import Block from '../../utils/block';

import template from './frame.hbs';

import './frame.css';

type Props = {
  title: string;
  content: Block[];
};

class Frame extends Block<Props> {
  render() {
    const { title, content } = this.props;

    return this.compile(template, { title, content });
  }
}

export default Frame;
