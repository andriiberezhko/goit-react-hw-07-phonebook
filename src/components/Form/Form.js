import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/dataSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };
  const haveDublicats = (contacts, data) => {
    return contacts.some(contact => contact.name === data.name);
  };
  const dispatch = useDispatch();
  const onSubmitForm = event => {
    const id = nanoid(10);
    const contact = {
      id,
      name,
      number,
    };
    if (haveDublicats(contacts, contact)) {
      alert(`${contact.name} is already in contacts`);
      event.preventDefault();
      reset();
      return;
    } else {
      event.preventDefault();
      dispatch(addContacts(contact));
      reset();
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputName}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
