import template from './iconButton.hbs'
import * as styles from './iconButton.module.scss'

export const iconButton = (props = {}) => {
  const initialProps = {
    type: 'button',
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
