import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { MainTitle, Contacts } from './App.styled';

export class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const isExist = this.state.contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.includes(name)) {
      alert('is already in contacts');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addNewContact} />

        <Contacts>Contacts</Contacts>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
