import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/dataSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
      ></input>
    </>
  );
};

export default Filter;
