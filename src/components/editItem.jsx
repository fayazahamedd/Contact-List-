/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const EditContactForm = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState(contact);

  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSave = () => {
    onSave(editedContact);
  };

  return (
    <div className="edit-form">
      <h2 style={{background: "red"}}>Edit Contact</h2>
      <label style={{ color: "black" }}>Name:</label>
      <input type="text" name="name" value={editedContact.name} onChange={handleInputChange} />
      <label style={{ color: "black" }}>Number:</label>
      <input type="text" name="phone" value={editedContact.phone} onChange={handleInputChange} />
      <label style={{ color: "black" }}>Email:</label>
      <input type="email" name="email" value={editedContact.email} onChange={handleInputChange} />
      <div className="form-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditContactForm;
