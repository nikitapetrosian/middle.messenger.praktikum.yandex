import Block from '../../utils/block';
import template from './link.hbs';

import './link.css';

type Props = {
  url: string;
  text: string;
  className?: string;
};

class Link extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default Link;
