import { Validator } from '../types';
import { INCORRECT_LETTERS, ONLY_DIGITS_MESSAGE } from './consts';
import getLengthMessage from './utils';
import requiredValidator from './required-validator';

const shouldCorrectLetters = /[^\w-]/g;
const shouldOnlyNumbers = /^\d+/g;

const loginValidator: Validator = (value) => {
  if (!value) {
    return requiredValidator(value);
  }

  if (value.length < 3 || value.length > 20) {
    return getLengthMessage(3, 20);
  }

  if (shouldOnlyNumbers.test(value)) {
    return ONLY_DIGITS_MESSAGE;
  }

  if (shouldCorrectLetters.test(value)) {
    return INCORRECT_LETTERS;
  }
};

export default loginValidator;
