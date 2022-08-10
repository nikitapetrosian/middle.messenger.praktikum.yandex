import Block from '../../utils/block';

import template from './input.hbs';

type Props = {
  name: string;
  type: string;
  className?: string;
};

class Input extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default Input;
