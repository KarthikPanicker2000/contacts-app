import React, {useState} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';
//setState changes and rerenders the component at the same time

const EditContact=() => {
    // constructor(props){
    //     super(props)
    //     const {id, name, email} = props.location.state.contact;
    //     this.state ={
    //         id,
    //         name,
    //         email,
    //     }
    // }
    const location = useLocation();
    const navigate = useNavigate();
    const {updateContactHandler} = useContactsCrud();

    const {id,name,email} = location.state.contact;

    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    // Because we dont want the form to submit,kinda destroys the whole purpose of using react
     const update=(e)=>{
        e.preventDefault();
        if(newName==="" || newEmail===""){
            alert("All the fields are mandatory");
            return;
        }
        updateContactHandler({id, name:newName, email:newEmail});
        setNewName("");
        setNewEmail("");
        navigate("/");
    }
    

        return(
            <div className="ui main">
                <h2>Edit Contact</h2>
                {/* add is a function which we define above */}
                <form className='ui form' onSubmit={update}>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                        type="text" 
                        name='name' 
                        placeholder='Name' 
                        value={newName} 
                        onChange={(e)=>setNewName(e.target.value)}
                        />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input 
                        type="text" 
                        name='email' 
                        placeholder='Email' 
                        value={newEmail} 
                        onChange={(e)=>setNewEmail(e.target.value)}
                        />
                    </div>
                    <button className='ui button blue'>Update</button>
                </form>
            </div>
        )
}
export default EditContact;