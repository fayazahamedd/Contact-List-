/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactListSelector } from './redux/reducer/contactListReducer';
import { fetchSuccess, fetchError, fetchStart } from './redux/reducer/contactListReducer'; 
import ListItems from "./components/listItems";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const { isLoading, error, contacts } = useSelector(contactListSelector);

  const getcontactList = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      // Dispatch fetch success action here
      dispatch(fetchSuccess(data));
    } catch (error) {
      // Dispatch fetch error action here
      dispatch(fetchError(error.message)); // You can pass the error message to the action
    }
  };

  useEffect(() => {
    // Dispatch fetch start action here if needed
    dispatch(fetchStart());
    getcontactList();
  }, []); 

  if (isLoading) {
    return <div className="message">Loading...</div>;
  }
  if (error) {
    return <div className="message">{error}</div>;
  }

  return (
    <>
      <h1>ContactList</h1>
      {contacts.length > 0 ?  
        <div className="card">
          <ListItems contactList={contacts} isEditFormVisible ={ isEditFormVisible} setIsEditFormVisible= {setIsEditFormVisible} />
        </div>
        : <h5>Contact List is Empty</h5>
      }
    </>
  );
};

export default App;
