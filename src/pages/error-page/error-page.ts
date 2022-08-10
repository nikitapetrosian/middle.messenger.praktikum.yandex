import Block from '../../utils/block';
import ServicePageInfo from '../../components/service-page-info/service-page-info';

import template from './error-page.hbs';

import './error-page.css';

const content = new ServicePageInfo({
  title: 'Ошибка',
  subtitle: 'Что-то пошло не так',
  linkText: 'Назад к чатам',
  linkUrl: '/chat',
});

type Props = {
  content: Block;
};

class ErrorPage extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default new ErrorPage({ content });
