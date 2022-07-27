import { backButton } from '../../../components'
import { passwordSettingsForm } from '../../modules'
import template from './editPassword.hbs'

export const editPasswordTemplate = (props = {}) => {
  const initialProps = {
    form: passwordSettingsForm,
    backButton: backButton({ url: '/' }),
    ...props,
  }

  return template({ ...initialProps })
}
