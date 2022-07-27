import template from './contactList.hbs'
import * as styles from './contactList.module.scss'

export const contactList = (props = {}) => {
  const initialProps = {
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
