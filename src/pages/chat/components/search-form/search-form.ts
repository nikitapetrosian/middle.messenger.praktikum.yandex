import Block from '../../../../utils/block';
import Input from '../../../../components/input';

import template from './search-form.hbs';

import './search-form.css';

type Props = {
  handleChange: (value: string) => void;
};

class SearchForm extends Block<Props> {
  constructor(props: Props) {
    super(props);
    this.children.input = new Input({
      name: 'search',
      type: 'text',
      placeholder: 'Поиск',
      className: 'search-form__input',
      events: {
        input: (event) => {
          props.handleChange(event.target.value);
          event.target.focus();
        },
      },
    });
  }

  render() {
    return this.compile(template);
  }
}

export default SearchForm;
