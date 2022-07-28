import { signUpForm } from '../../modules'
import template from './signUp.hbs'

export const signUpTemplate = (props = {}) => {
  const initialProps = {
    form: signUpForm,
    ...props,
  }

  return template({ ...initialProps })
}
