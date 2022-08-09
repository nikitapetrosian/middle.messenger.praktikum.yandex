import { Validator } from '../types';
import { FIRST_LETTER_MESSAGE, INCORRECT_LETTERS } from './consts';
import requiredValidator from './required-validator';

const shouldCapitalizeFirstLetter = /^[^A-ZА-ЯЁ]/;
const shouldCorrectLetters = /[^A-Za-zА-Яа-яЁё-]/g;

const nameValidator: Validator = (value) => {
  if (!value) {
    return requiredValidator(value);
  }

  const head = value[0];
  const rest = value.slice(1);

  if (shouldCapitalizeFirstLetter.test(head)) {
    return FIRST_LETTER_MESSAGE;
  }

  if (shouldCorrectLetters.test(rest)) {
    return INCORRECT_LETTERS;
  }
};

export default nameValidator;
