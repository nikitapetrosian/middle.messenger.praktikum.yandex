import template from './authForm.hbs'
import * as styles from './authForm.module.scss'

export const authForm = (props = {}) => {
  const initialProps = {
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
