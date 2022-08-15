import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], filter: '' };

export const dataSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, filterContacts } =
  dataSlice.actions;
