import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { MainTitle, Contacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addNewContact = (name, number) => {
    const isExist = this.state.contacts.some(contact => contact.name === name);

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

    this.setState(
      ({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }),
      () => {
        console.log(this.state);
      }
    );

    this.reset();
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

  reset = () => {
    this.setState({ name: '', number: '' });
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
