import React from 'react';

//Below is a function expression
//Here semantic UI classes are used.It was referenced in index.html
//Semantic-UI Menu Fixed Variation is used to fix the position of menu items in respect of their content.(Meaning scroll kare page to wo content bhi gayab ho jaye i.e not fixed wrt page).
const Header=()=>{
    return (
        <div className='ui fixed menu'>
            {/* className ui container centre doesnot work anymore */}
            <div className='ui center aligned container'>
                <h2>Contact Manager</h2>
            </div>
        </div>
    );
}

export default Header;