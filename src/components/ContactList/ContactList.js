import React from 'react';
import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/dataSlice';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  const dispatch = useDispatch();
  return (
    <ul>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={() => dispatch(removeContacts(id))}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
