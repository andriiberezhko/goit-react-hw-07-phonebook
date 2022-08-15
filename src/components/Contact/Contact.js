import React from 'react';
import { useDeleteContactsMutation } from 'services/contactsApi';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
