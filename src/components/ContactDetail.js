import react from 'react';
import {Link, useLocation} from 'react-router-dom';
import user from '../images/user.jpg';

const ContactDetail=()=>{
    const location = useLocation();
    const {name, email}=location.state.contact;
    return(
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>

            {/* beware of ui changes here */}
            <div className='center-div'>
                <Link to="/">
                    <button className='ui button blue center'>Back to contact list</button>
                </Link>
            </div>
            
        </div>
    );
}

export default  ContactDetail;