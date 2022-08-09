import Block from './block';
import { FormFieldItemData } from '../components/form-field';

const submitValidation = (formData: FormData, fieldsData: FormFieldItemData[], fields: Block[]) => {
  let formIsValid = true;

  fieldsData?.forEach(({ name, validator }, index) => {
    if (!validator) {
      return;
    }

    const validationResult = validator(formData.get(name) as string);

    if (!validationResult) {
      return;
    }

    formIsValid = false;

    fields[index].setProps({ errorText: validationResult });
  });

  return formIsValid;
};

export default submitValidation;
