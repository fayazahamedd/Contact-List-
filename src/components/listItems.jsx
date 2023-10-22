/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
import React, { useState, useEffect } from "react";
import "./ListItems.css"; // Import the CSS file
import { fetchDelete, fetchAdd, fetchEdit } from "../redux/reducer/contactListReducer";
import { useDispatch } from "react-redux";
import EditContactForm from "./editItem";
import SaveContactForm from "./addItem";

const ListItems = ({
  contactList,
  isEditFormVisible,
  setIsEditFormVisible,
}) => {
  const dispatch = useDispatch();

  const [selectedContact, setSelectedContact] = useState(null);
  const [saveClicked, setSaveClicked] = useState(false);

//   console.log(contactList);

  const onDelete = (id) => {
    // console.log(id);
    dispatch(fetchDelete(id));
  };

  const handleEdit = (contactId) => {
    const contactToEdit = contactList.find(
      (contact) => contact.id === contactId
    );
    setSelectedContact(contactToEdit);
    setIsEditFormVisible(true);
  };

  const handleSaveEdit = (editedContact) => {
    console.log("edit", editedContact);
    dispatch(fetchEdit(editedContact))
    setIsEditFormVisible(false);
  };

  const handleCancelEdit = () => {
    setIsEditFormVisible(false);
  };

  return (
    <div className="list-container">
      <button
        className="delete-button"
        onClick={() => setSaveClicked(true)}
      >
        Add Contact
      </button>
      <table className="list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Edit Action</th>
            <th>Delete Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td className="action-buttons">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
              </td>
              <td className="action-buttons">
                <button
                  className="delete-button"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditFormVisible && selectedContact && (
        <div className="overlay">
          <EditContactForm
            contact={selectedContact}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
      { saveClicked && (
        <div className="overlay">
        <SaveContactForm
          contact={selectedContact}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          setSaveClicked={setSaveClicked}
        />
      </div>
      )}
    </div>
  );
};

export default ListItems;
