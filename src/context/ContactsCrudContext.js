import { createContext, useContext, useState } from "react";
import api from '../api/contacts';
import {v4 as uuid} from "uuid";

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider ({children}){
    const [contacts, setContacts] = useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const [searchResults,setSearchResults]=useState([]);

    // RetrieveContacts
    const retrieveContacts=async ()=>{
        const response= await api.get("/contacts");
        if(response.data) 
            setContacts(response.data);
    };

    //Add Contacts
    const addContactHandler= async (contact)=>{

        console.log(contact);
        const request={
          id: uuid(),
          ...contact,
        };
    
        const response = await api.post("/contacts",request);
        setContacts([...contacts,response.data]);
      }

    //Applying .filter on an array gives us an array with the items that satisfy our condition.
    //Delete Contact
    const removeContactHandler= async (id)=>{
        await api.delete(`/contacts/${id}`)
        const newContactList=contacts.filter((contact)=>{
            return contact.id!==id;
    });
    setContacts(newContactList);
  }

  //Update Contact
  const updateContactHandler= async (contact)=>{
    const response= await api.put(`/contacts/${contact.id}`,contact);
    const { id } = response.data;
    setContacts(
        contacts.map(contact=>{
            return contact.id === id ? {...response.data} : contact;
    })
    );
  };

  //Search Contact
  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    if (searchTerm !== ""){
      const newContactList =contacts.filter((contact) =>{
       return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  };

    const value={
        contacts,
        retrieveContacts,
        removeContactHandler,
        addContactHandler,
        updateContactHandler,
        searchTerm,
        searchResults,
        searchHandler,
    }
    return <contactsCrudContext.Provider value={ value }>
        {children}
    </contactsCrudContext.Provider>
}

//custom hook(also the consumer)
export function useContactsCrud(){
    return useContext(contactsCrudContext);
}