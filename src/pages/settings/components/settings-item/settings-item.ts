import Block from '../../../../utils/block';

import template from './settings-item.hbs';

import './settings-item.css';

type Props = {
  title: string;
  value: string;
};

class SettingsItem extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default SettingsItem;
