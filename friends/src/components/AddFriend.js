import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// ************************************************ Still need to import this page ***********************************

const initialAddFriendValues = {
    id:'',
    name:'',
    age:'',
    email:''
}

export default function AddFriend(props){
    // const { friends, setFriends, push } = props;
    const [formAddFriendValues, setFormAddFriendValues] = useState(initialAddFriendValues);
    

    const handleAddFriendChange = (event) => {
        setFormAddFriendValues({...formAddFriendValues, 
        [event.target.name]: event.target.value})
    } 

    const submitAddFriend = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post('/api/friends', formAddFriendValues)
        .then((res)=>{
            props.setFriends(res.data);
            // props.push('/friends');
            // window.location.href =  '/friendlist';
        })
        .catch(err=>{
            console.log(err);
        })
        setFormAddFriendValues(initialAddFriendValues);
    }
    
    // const submitAddFriend = (event) => {
        
    //     const NewFriend = {
    //         id:Date.now(),
    //         name:formAddFriendValues.name,
    //         age:formAddFriendValues.age,
    //         email:formAddFriendValues.email
    //     }
    //     postNewFriend(NewFriend);
    // }
    const pushToFriendList = () => { //Use this function to push to the next page
        // props.push('/friendlist'); //Make sure to add you endpoint here, the link of the page /
        window.location.href =  '/friendlist';
    }

    return (
        <div className='login-container'>
            <form onSubmit={submitAddFriend}>
                <h2>Add a Friend</h2>
                <input 
                    type='text'
                    name='name'
                    placeholder='Friend Name'
                    value={formAddFriendValues.name}
                    onChange={handleAddFriendChange}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={formAddFriendValues.password}
                    onChange={handleAddFriendChange}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formAddFriendValues.email}
                    onChange={handleAddFriendChange}
                />
                <button onClick={pushToFriendList}>Add Friend</button>
            </form>
        </div>
    )
}