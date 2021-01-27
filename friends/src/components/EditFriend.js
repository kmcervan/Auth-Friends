import React, { useState } from 'react';
// ************************************************ Still need to import this page ***********************************

const initialEditFriendValues = {
    name:'',
    age:'',
    email:''
}

export default function EditFriend(){
    const [formEditFriendValues, setFormEditFriendValues] = useState(initialEditFriendValues);

    const handleEditFriendChange = (event) => {
        setFormEditFriendValues({...formEditFriendValues, 
        [event.target.name]: event.target.value})
    } 
    return (
        <div className='login-container'>
            <form>
                <h2>Add a Friend</h2>
                <input 
                    type='text'
                    name='name'
                    placeholder='Friend Name'
                    value={formEditFriendValues.name}
                    onChange={handleEditFriendChange}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={formEditFriendValues.password}
                    onChange={handleAddFriendChange}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formEditFriendValues.email}
                    onChange={handleEditFriendChange}
                />
                <button>Edit Friend</button>
                
            </form>
        </div>
    )
}