import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const dataSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = dataSlice.actions;
