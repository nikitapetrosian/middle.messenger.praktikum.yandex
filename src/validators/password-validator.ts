import { Validator } from '../types';
import getLengthMessage from './utils';
import { INCORRECT_PASSWORD_MESSAGE } from './consts';
import requiredValidator from './required-validator';

const shouldContainCapitalizeLetterAndDigit = /(?=.*\d)(?=.*[A-ZА-ЯЁ])/g;

const passwordValidator: Validator = (value) => {
  if (!value) {
    return requiredValidator(value);
  }

  if (value.length < 8 || value.length > 40) {
    return getLengthMessage(8, 40);
  }

  if (!shouldContainCapitalizeLetterAndDigit.test(value)) {
    return INCORRECT_PASSWORD_MESSAGE;
  }
};

export default passwordValidator;
