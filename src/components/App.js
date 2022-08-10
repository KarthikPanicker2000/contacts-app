import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import {ContactsCrudContextProvider} from "../context/ContactsCrudContext";

function App() {
  
  // We see that when we refresh the page.our list goes away.To sustain the list we use the React hook -->UseEffect.
  // What useEffect does is, whenever the value of the dependency changes,it rerenders the component.
  // useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    // console.log(contacts);
  // },[contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header/>
        {/* addContactHandler is basically a function passed as props because we want to send data from child to  parent,function i.e prop is called inside child and is executed in parent(Jenius) */}
        <ContactsCrudContextProvider>
        <Routes>
            <Route path='/' 
            exact 
            element={<ContactList/>}
            />

            <Route 
            path='/add' 
            element={<AddContact/>}
            />

            <Route path='/edit' 
            element={<EditContact/>}
            />

            <Route path='/contact/:id' element={<ContactDetail/>}/>
            
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
      
    </div>
    
  );
}

export default App;
