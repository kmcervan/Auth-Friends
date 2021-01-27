import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import FriendCard from './FriendCard';
import { Link } from 'react-router-dom';

export default function FriendList(){
    const [friends, setFriends] = useState([]);
    const { push } = useHistory();

    const pushToAddFriend = () => { //Use this function to push to the next page
        push('/add-friend') //Make sure to add you endpoint here, the link of the page /
        return (<AddFriend friends={friends} setFriends={setFriends} push={push} />)
    }
    useEffect(()=>{
        getFriends();
    }, [])

    const getFriends = () =>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    

    return(
        <div>
            <h3>Welcome to Your Friend's List!</h3>
            <button onClick={pushToAddFriend}>Add A Friend</button>

            {/* <Link onClick={ <AddFriend friends={friends} setFriends={setFriends} push={push} />}>Add Friend</Link> */}
            {friends.map((friend) => {
                return <FriendCard key={friend.id} details={friend} />})}
        </div>
    )
}