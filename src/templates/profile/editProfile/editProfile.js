import { backButton } from '../../../components'
import { profileSettingsForm } from '../../modules'
import template from './editProfile.hbs'

export const editProfileTemplate = (props = {}) => {
  const initialProps = {
    form: profileSettingsForm,
    backButton: backButton({ url: '/' }),
    ...props,
  }

  return template({ ...initialProps })
}
