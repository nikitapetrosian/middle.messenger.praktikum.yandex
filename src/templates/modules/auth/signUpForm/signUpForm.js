import { button, field, form, link } from '../../../../components'
import { authForm } from '../components/authForm/authForm'
import template from './signUpForm.hbs'

export const signUpForm = (props = {}) => {
  const initialProps = {
    form: authForm({
      title: 'Регистация',
      helperText: 'Вы зарегистрированы?',
      link: link({
        title: 'Вход',
        url: '/sign-in',
      }),
      form: form({
        fields: [
          field({
            id: 'first_name',
            label: 'Имя',
            name: 'first_name',
          }),
          field({
            id: 'second_name',
            label: 'Фамилия',
            name: 'second_name',
          }),
          field({
            id: 'login',
            label: 'Логин',
            name: 'login',
          }),
          field({
            type: 'email',
            id: 'email',
            label: 'Email',
            name: 'email',
          }),
          field({
            type: 'password',
            id: 'password',
            label: 'Пароль',
            name: 'password',
          }),
          field({
            type: 'tel',
            id: 'phone',
            label: 'Телефон',
            name: 'phone',
          }),
        ],
        button: button({
          type: 'submit',
          title: 'Зарегистрироваться',
        }),
      }),
    }),
    ...props,
  }

  return template({ ...initialProps })
}
