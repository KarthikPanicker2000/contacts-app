import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

//setState changes and rerenders the component at the same time

const AddContact = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { addContactHandler } = useContactsCrud();
    //useNavigate is a router dom hook
    const navigate = useNavigate();
    // Because we dont want the form to submit,kinda destroys the whole purpose of using react
    const add=(e)=>{
        e.preventDefault();
        if(name==="" || email===""){
            alert("All the fields are mandatory");
            return;
        }
        addContactHandler({name,email});
        setName("");
        setEmail("");
        navigate("/");
    };
    
    
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                {/* add is a function which we define above */}
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
}
export default AddContact;