import template from './error.hbs'
import * as styles from './error.module.scss'

import { link } from '../../components'

export const errorTemplate = (props = {}) => {
  const code = props.code ?? 404

  const title =
    code === 404
      ? 'Что-то пошло не так!!!!!!!'
      : 'Где-то рухнул сервис'

  const initialProps = {
    title,
    code,
    link: link({
      title: 'На главную',
      url: '/',
      class: styles.link,
    }),
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
