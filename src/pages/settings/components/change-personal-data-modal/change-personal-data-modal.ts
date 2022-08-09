import Block from '../../../../utils/block';
import FormField, { FormFieldItemData } from '../../../../components/form-field';
import Modal from '../../../../components/modal';
import Button from '../../../../components/button';
import validators from '../../../../validators';

import template from './change-personal-data-modal.hbs';

import './change-personal-data-modal.css';
import submitValidation from '../../../../utils/submit-validation';

const fieldsData: FormFieldItemData[] = [
  {
    label: 'Почта',
    name: 'email',
    type: 'email',
    validator: validators.emailValidator,
  },
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    validator: validators.loginValidator,
  },
  {
    label: 'Имя',
    name: 'first_name',
    type: 'text',
    validator: validators.nameValidator,
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    type: 'text',
    validator: validators.nameValidator,
  },
  {
    label: 'Имя в чате',
    name: 'display_name',
    type: 'text',
  },
  {
    label: 'Телефон',
    name: 'phone',
    type: 'tel',
    validator: validators.phoneValidator,
  },
];

const submit = new Button({
  text: 'Сохранить',
  type: 'submit',
});
const fields = fieldsData.map((item) => new FormField(item));

type Props = {
  submit: Button;
  fields: FormField[];
};

class Content extends Block<Props> {
  constructor(props: Props) {
    super(props);

    Object.assign(this.props, {
      events: {
        submit: (event: Event) => this.handelSubmit(event),
      },
    });
  }

  handelSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formIsValid = submitValidation(formData, fieldsData, this.children.fields as Block[]);

    if (formIsValid) {
      console.log(Object.fromEntries(formData));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      modal.hide();
    }
  };

  render() {
    return this.compile(template, this.props);
  }
}

const content = new Content({
  submit,
  fields,
});

const modal = new Modal({ content });

export default modal;
