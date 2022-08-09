import { Validator } from '../../types';

export type FormFieldItemData = {
  label: string;
  name: string;
  type: string;
  validator?: Validator;
};
