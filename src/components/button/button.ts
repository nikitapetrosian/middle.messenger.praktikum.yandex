import Block from '../../utils/block';
import template from './button.hbs';

import './button.css';

type Props = {
  text: string;
  type?: string;
  className?: string;
  theme?: 'button' | 'link';
};

class Button extends Block<Props> {
  render() {
    const {
      text, type = 'button', theme = 'button', className,
    } = this.props;
    return this.compile(template, {
      text, type, theme, className,
    });
  }
}

export default Button;
