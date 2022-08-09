import { Validator } from '../types';
import { REQUIRED_MESSAGE } from './consts';

const requiredValidator: Validator = (value) => {
  if (!value) {
    return REQUIRED_MESSAGE;
  }
};

export default requiredValidator;
