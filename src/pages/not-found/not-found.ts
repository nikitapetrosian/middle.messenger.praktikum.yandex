import Block from '../../utils/block';

import ServicePageInfo from '../../components/service-page-info/service-page-info';
import template from './not-found.hbs';

import './not-found.css';

const content = new ServicePageInfo({
  title: '404',
  subtitle: 'Такой страницы нет',
  linkText: 'Назад к чатам',
  linkUrl: 'chat',
});

type Props = {
  content: Block;
};

class NotFound extends Block<Props> {
  render() {
    return this.compile(template, this.props);
  }
}

export default new NotFound({ content });
