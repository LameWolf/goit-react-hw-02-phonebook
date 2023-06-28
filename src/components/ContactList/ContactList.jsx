import React from 'react';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
