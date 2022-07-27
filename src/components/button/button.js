import template from './button.hbs'
import * as styles from './button.module.scss'

export const button = (props = {}) => {
  const initialProps = {
    type: 'button',
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
