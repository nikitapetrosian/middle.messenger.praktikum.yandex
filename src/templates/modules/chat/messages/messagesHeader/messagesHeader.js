import template from './messagesHeader.hbs'
import { iconButton } from '../../../../../components'
import icon from 'bundle-text:../../../../assets/icons/moreIcon.svg'
import * as styles from './messagesHeader.module.scss'

export const messagesHeader = (props = {}) => {
  const initialProps = {
    styles,
    icon: iconButton({ icon: icon }),
    ...props,
  }

  return template({ ...initialProps })
}
