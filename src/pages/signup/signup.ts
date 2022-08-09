import Block from '../../utils/block';
import Frame from '../../components/frame';
import Link from '../../components/link';
import signupForm from './components/signup-form';

import template from './signup.hbs';

import './signup.css';

const link = new Link({ url: '/login', text: 'Войти', className: 'signup__link' });
const frameContent = [
  signupForm,
  link,
];

const frame = new Frame({ title: 'Регистрация', content: frameContent });

type Props = {
  content: Block;
};

class Signup extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default new Signup({ content: frame });
