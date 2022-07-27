import template from './messageList.hbs'
import { iconButton } from '../../../../../components'
import attachIcon from 'bundle-text:../../../../assets/icons/attachIcon.svg'
import sendIcon from 'bundle-text:../../../../assets/icons/sendIcon.svg'
import * as styles from './messageList.module.scss'

export const messageList = (props = {}) => {
  const initialProps = {
    attachIcon: iconButton({ icon: attachIcon, class: styles.button }),
    sendIcon: iconButton({ icon: sendIcon, class: styles.button }),
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
