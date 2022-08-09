import Block from '../../utils/block';
import Frame from '../../components/frame';
import Link from '../../components/link';
import LoginForm from './components/login-form';

import template from './login.hbs';

import './login.css';

const link = new Link({ url: '/signup', text: 'Нет аккаунта?', className: 'login__link' });
const frameContent = [
  LoginForm,
  link,
];

const frame = new Frame({ title: 'Вход', content: frameContent });

type Props = {
  content: Block;
};

class Login extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default new Login({ content: frame });
