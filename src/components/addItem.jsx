/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { fetchAdd } from "../redux/reducer/contactListReducer";
import { useDispatch } from "react-redux";



const EditContactForm = ({ setSaveClicked}) => {

  const dispatch = useDispatch();

  const [editedContact, setEditedContact] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const onCancel = () => {
    setSaveClicked(false);
  }

  const handleSave = (e) => {
    // console.log(e)
    dispatch(fetchAdd(editedContact));
    setSaveClicked(false);
  }

//   console.log(editedContact,'editedContact')

  return (
    <div className="edit-form">
      <h2 style={{background: "black"}}>Add Contact</h2>
      <label style={{ color: "black" }}>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} />
      <label style={{ color: "black" }}>Number:</label>
      <input type="text" name="phone"  onChange={handleInputChange} />
      <label style={{ color: "black" }}>Email:</label>
      <input type="email" name="email" onChange={handleInputChange} />
      <div className="form-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditContactForm;
