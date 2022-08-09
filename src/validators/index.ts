import nameValidator from './name-validator';
import loginValidator from './login-validator';
import emailValidator from './email-validator';
import passwordValidator from './password-validator';
import phoneValidator from './phone-validator';
import requiredValidator from './required-validator';

const validators = {
  nameValidator,
  loginValidator,
  emailValidator,
  passwordValidator,
  phoneValidator,
  requiredValidator,
};

export default validators;
