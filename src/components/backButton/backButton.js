import template from './backButton.hbs'
import * as styles from './backButton.module.scss'

export const backButton = (props = {}) => {
  const initialProps = {
    type: 'button',
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
