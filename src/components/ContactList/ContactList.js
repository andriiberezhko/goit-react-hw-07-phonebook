import React from 'react';
import Contact from 'components/Contact/Contact';
import { useGetContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useGetContactsQuery().data;

  const { filter } = useSelector(state => state.filter);
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  return (
    <ul>
      {contacts &&
        filteredContacts().map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} number={phone} />;
        })}
    </ul>
  );
};
export default ContactList;
