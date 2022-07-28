import template from './link.hbs'
import * as styles from './link.module.scss'

export const link = (props = {}) => {
  const initialProps = {
    target: '_self',
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
