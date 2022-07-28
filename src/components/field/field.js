import template from './field.hbs'
import * as styles from './field.module.scss'

export const field = (props = {}) => {
  const initialProps = {
    type: 'text',
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
