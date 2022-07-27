import template from './form.hbs'
import * as styles from './form.module.scss'

export const form = (props = {}) => {
  const initialProps = {
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
