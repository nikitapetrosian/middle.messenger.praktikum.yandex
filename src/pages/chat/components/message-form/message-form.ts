import Block from '../../../../utils/block';
import Button from '../../../../components/button';
import FormField from '../../../../components/form-field';
import validators from '../../../../validators';

import template from './message-form.hbs';

import './message-form.css';

const messageField = {
  name: 'message',
  type: 'text',
  validator: validators.requiredValidator,
};

const button = new Button({
  text: 'Отправить',
  type: 'submit',
});

const input = new FormField({ ...messageField });

class MessageForm extends Block {
  render() {
    return this.compile(template);
  }
}

export default new MessageForm({
  input,
  button,
  events: {
    submit: (event) => {
      event.preventDefault();
      console.log('+++send message');
    },
  },
});
