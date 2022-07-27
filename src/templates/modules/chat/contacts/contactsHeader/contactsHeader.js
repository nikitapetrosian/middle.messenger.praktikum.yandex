import template from './contactsHeader.hbs'
import { iconButton } from '../../../../../components'
import icon from 'bundle-text:../../../../assets/icons/burgerIcon.svg'
import * as styles from './contactsHeader.module.scss'

export const contactsHeader = (props = {}) => {
  const initialProps = {
    styles,
    icon: iconButton({ icon: icon }),
    ...props,
  }

  return template({ ...initialProps })
}
