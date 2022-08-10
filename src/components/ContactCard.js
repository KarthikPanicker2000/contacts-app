import react from 'react';
import {Link} from 'react-router-dom';
import user from '../images/user.png';
import { useContactsCrud } from '../context/ContactsCrudContext';

const ContactCard=(props)=>{
    // This is destructuring
    const {id,name,email}=props.contact;
    const {removeContactHandler} = useContactsCrud();

    const deleteContact = (id) =>{
        removeContactHandler(id);
    }

    return(
        <div className='item'>
            <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
                <Link to={`/contact/${id}`}
                state= {{contact: props.contact }}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </Link>
                
            </div>
            <i className='trash alternate outline icon' style={{color: "maroon",marginTop:"7px",marginLeft:"10px"}}
            onClick={()=>deleteContact(id)}></i>
            <Link 
            to={`/edit/`}
            state = {{contact: props.contact}} >
                <i className='edit alternate outline icon' style={{color: "blue",marginTop:"7px"}}
                ></i>
            </Link>
            
        </div>
    );
}

export default  ContactCard;