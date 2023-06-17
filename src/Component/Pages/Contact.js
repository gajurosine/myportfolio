import React from 'react';
// import { Form } from 'react-router-dom';

function CONTACT(props) {
    return (
        <div className='contact-content'>
             <div className='contact-here'>
                <div className='contacts'>
                <h1 className='contact-head'> contact</h1>
                <p className='para-contact'>CONTACT WITH ME </p>
                </div>
       <div className='contact-info'>
        <div className='contact-side1'>
            <h1>hello Rosine  please contact me</h1>
         </div>
            <div className='contact-form'>
                <form action='post' method='#'>
                    <label>username</label>
                    <input type='text' name='user' value=""></input>
                    <label>Email</label>
                    <input type='text' name='user' value=""></input>
                    <label>Password</label>
                    <input type='text' name='user' value=""></input>
                    <label>Comment</label>
                    <input type='text' name='user' value=''></input>
                    <input ></input>
                
                </form>
                </div>
            </div>
       </div>
            
        </div>
    );
}

export default CONTACT;