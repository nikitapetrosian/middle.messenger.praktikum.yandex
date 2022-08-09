import Block from '../../utils/block';
import Contact from './components/contact';
import Message from './components/message';
import Link from '../../components/link';
import messageForm from './components/message-form';
import SearchForm from './components/search-form';
import ContactAvatar from './components/contact-avatar';

import template from './chat.hbs';

import './chat.css';

const contactsData = [
  {
    avatar: '',
    name: 'Eric',
    message: 'Some message',
    time: '15.06',
  },
  {
    avatar: '',
    name: 'Michele',
    message: 'Some message',
    time: '15.00',
  },
];

const messagesData = [
  {
    message: 'Some message',
    time: '15.00',
    isMyMessage: false,
  },
  {
    message: 'My message',
    time: '15.00',
    isMyMessage: true,
  },
];

const settingsLink = new Link({
  text: '< Профиль',
  url: '/settings',
  className: 'chat__settings-link',
});
const messages = messagesData.map((message) => new Message(message));
const avatar = new ContactAvatar({ avatar: '' });

type Props = {
  contactName: string;
  avatar: ContactAvatar;
  messages: Message[];
  settingsLink: Link;
  messageForm: Block;
};

class Chat extends Block<Props> {
  constructor(props:Props) {
    super(props);

    Object.assign(this.children, {
      searchForm: new SearchForm({
        handleChange: this.handleSearch,
      }),
      contacts: contactsData.map((contact) => new Contact(contact)),
    });
  }

  handleSearch = (value: string) => {
    this.children.contacts = contactsData
      .filter((contact) => contact.name.toLowerCase().includes(value))
      .map((contact) => new Contact(contact));
  };

  render() {
    return this.compile(template, this.props);
  }
}

export default new Chat({
  avatar,
  contactName: 'Eric',
  messages,
  settingsLink,
  messageForm,
});
