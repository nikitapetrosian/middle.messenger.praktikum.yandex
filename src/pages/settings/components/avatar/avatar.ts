import Block from '../../../../utils/block';

import template from './avatar.hbs';

import './avatar.css';

class Avatar extends Block {
  render() {
    return this.compile(template);
  }
}

export default Avatar;
