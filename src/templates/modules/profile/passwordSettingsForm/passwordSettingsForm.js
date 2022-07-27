import template from './passwordSettingsForm.hbs'
import { button, field, form } from '../../../../components'
import * as styles from './passwordSettingsForm.module.scss'

export const passwordSettingsForm = (props = {}) => {
  const initialProps = {
    title: 'Change password',
    form: form({
      fields: [
        field({
          type: 'password',
          id: 'oldPassword',
          label: 'Старый пароль',
          name: 'oldPassword',
        }),
        field({
          type: 'password',
          id: 'newPassword',
          label: 'Новый пароль',
          name: 'newPassword',
        }),
        field({
          type: 'password',
          id: 'repeatNewPassword',
          label: 'Новый пароль еще раз',
          name: 'repeatNewPassword',
        }),
      ],
      button: button({
        title: 'Сохранить',
      }),
      class: styles.form,
    }),
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
