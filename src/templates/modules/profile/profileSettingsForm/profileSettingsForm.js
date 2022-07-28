import { button, field } from '../../../../components'
import template from './profileSettingsForm.hbs'
import * as styles from './profileSettingsForm.module.scss'
import avatar from '../../../assets/image/avatar.jpg'

export const profileSettingsForm = (props = {}) => {
  const initialProps = {
    title: 'Petrosian Nikita',
    avatar:
      avatar,
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
        id: 'display_name',
        label: 'Ваш Nickname',
        name: 'display_name',
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
        type: 'tel',
        id: 'phone',
        label: 'Телефон',
        name: 'phone',
      }),
    ],
    button: button({
      type: 'submit',
      title: 'Сохранить',
    }),
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
