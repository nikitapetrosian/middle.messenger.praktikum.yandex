import template from './chat.hbs'
import {
  contactsHeader,
  contactList,
  messagesHeader,
  messageList,
} from '../modules'
import * as styles from './chat.module.scss'

export const chatTemplate = (props = {}) => {
  const initialProps = {
    contactsHeader: contactsHeader(),
    contactList: contactList(),
    messagesHeader: messagesHeader(),
    messageList: messageList(),
    styles,
    ...props,
  }

  return template({ ...initialProps })
}
