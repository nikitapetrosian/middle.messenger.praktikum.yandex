import { signInForm } from '../../modules'
import template from './signIn.hbs'

export const signInTemplate = (props = {}) => {
  const initialProps = {
    form: signInForm,
    ...props,
  }

  return template({ ...initialProps })
}
