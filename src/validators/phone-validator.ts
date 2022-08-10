import { Validator } from '../types';
import getLengthMessage from './utils';
import { INCORRECT_LETTERS } from './consts';
import requiredValidator from './required-validator';

const shouldContainRightSymbols = /^(\+{1}|\d)\d+$/;

const phoneValidator: Validator = (value) => {
  if (!value) {
    return requiredValidator(value);
  }

  if (value.length < 10 || value.length > 15) {
    return getLengthMessage(10, 15);
  }

  if (!shouldContainRightSymbols.test(value)) {
    return INCORRECT_LETTERS;
  }
};

export default phoneValidator;
