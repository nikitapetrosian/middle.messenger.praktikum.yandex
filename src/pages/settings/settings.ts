import Block from '../../utils/block';

import Button from '../../components/button';
import SettingsItem from './components/settings-item';
import Avatar from './components/avatar';
import Link from '../../components/link';
import changePersonalDataModal from './components/change-personal-data-modal';
import changePasswordModal from './components/change-password-modal';

import template from './settings.hbs';

import './settings.css';

const items = [
  {
    title: 'Почта',
    value: 'test@test.ru',
  },
  {
    title: 'Логин',
    value: 'konstantin',
  },
  {
    title: 'Имя',
    value: 'Константин',
  },
  {
    title: 'Фамилия',
    value: 'Константинов',
  },
  {
    title: 'Имя в чате',
    value: 'costa',
  },
  {
    title: 'Телефон',
    value: '+7 945 822 45 09',
  },
];

const toChatLink = new Link({ url: '/chat', text: '< К чатам' });
const avatar = new Avatar({});
const settingsItems = items.map((item) => new SettingsItem(item));
const changePersonalDataButton = new Button({
  text: 'Изменить данные',
  theme: 'link',
  events: {
    click: () => {
      changePersonalDataModal.show();
    },
  },
});
const changePasswordButton = new Button({
  text: 'Изменить пароль',
  theme: 'link',
  events: {
    click: () => {
      changePasswordModal.show();
    },
  },
});
const logOutLink = new Link({ url: '/login', text: 'Выйти', className: 'settings__logout-link' });

type Props = {
  toChatLink: Link;
  avatar: Avatar;
  settingsItems: SettingsItem[];
  changePersonalDataButton: Button;
  changePasswordButton: Button;
  logOutLink: Link;
  changePersonalDataModal: Block;
  changePasswordModal: Block;
};

class Settings extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default new Settings({
  toChatLink,
  avatar,
  login: items[2].value,
  settingsItems,
  changePersonalDataButton,
  changePasswordButton,
  logOutLink,
  changePersonalDataModal,
  changePasswordModal,
});
