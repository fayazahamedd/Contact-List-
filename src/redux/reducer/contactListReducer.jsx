import { createSlice } from '@reduxjs/toolkit';


const initialContactListState = {
  // Define your initial state properties here
  contacts: [],
  isLoading: false,
  error: null,
};

const contactListSlice = createSlice({
  name: 'contactList',
  initialState: initialContactListState,
  reducers: {
    // Define your reducer actions here
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // You can set the error message received from the action payload
    },
    fetchDelete: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    fetchAdd: (state, action) => {
      state.contacts = [
        ...state.contacts,
        {
          id: state.contacts.length + 1,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone
        }
      ];
    },
    
    fetchEdit: (state, action) => {
      const editedContact = action.payload;
      const editedContactIndex = state.contacts.findIndex(contact => contact.id === editedContact.id);
      if (editedContactIndex !== -1) {
        state.contacts[editedContactIndex] = editedContact;
      }
    },
  },
});

export const contactListReducer = contactListSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError, fetchDelete, fetchAdd, fetchEdit } = contactListSlice.actions;
export const contactListSelector = (state) => state.contactListReducer;