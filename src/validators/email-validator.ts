import { Validator } from '../types';
import { INCORRECT_EMAIL } from './consts';
import requiredValidator from './required-validator';

const shouldCorrect = /^[\w|\-^@]+@[\w|\-^@]+\.[\w|\-^@]+$/;

const emailValidator: Validator = (value) => {
  if (!value) {
    return requiredValidator(value);
  }

  if (!shouldCorrect.test(value)) {
    return INCORRECT_EMAIL;
  }
};

export default emailValidator;
