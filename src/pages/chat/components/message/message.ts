import Block from '../../../../utils/block';

import template from './message.hbs';

import './message.css';

type Props = {
  message: string;
  time: string;
  isMyMessage: boolean;
};

class Message extends Block<Props> {
  render() {
    const { message, time, isMyMessage } = this.props;
    return this.compile(template, {
      message,
      time,
      className: isMyMessage ? 'message_my' : '',
    });
  }
}

export default Message;
