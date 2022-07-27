import template from './signInForm.hbs'
import { authForm } from '../components/authForm/authForm'
import { button, field, form, link } from '../../../../components'

export const signInForm = (props = {}) => {
  const initialProps = {
    form: authForm({
      title: 'Вход',
      helperText: 'Не зарегистрирован?',
      link: link({
        title: 'Региистрация',
        url: '/sign-up',
      }),
      form: form({
        fields: [
          field({
            id: 'login',
            label: 'Логин',
            name: 'login',
          }),
          field({
            type: 'password',
            id: 'password',
            label: 'Пароль',
            name: 'password',
          }),
        ],
        button: button({
          title: 'Войти',
        }),
      }),
    }),
    ...props,
  }

  return template({ ...initialProps })
}
