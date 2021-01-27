import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
    username:'',
    password:''
}

export default function Login(){
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

    const handleChange = (event) => {
        setFormValues({...formValues, 
        [event.target.name]: event.target.value})
    } 
    // const pushToFriendList = () => { //Use this function to push to the next page
    //     push('endpoint') //Make sure to add you endpoint here, the link of the page /
    // }

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
          .then(res=>{
            localStorage.setItem('token', res.data.payload);
            push('/friendlist'); // ********************************** Change this ***********************************
          })
          .catch(err=>{
            console.log(err);
          });
        //1. use axios to do a post request.
        //2. if request is successful, console.log token.
        //3. if request is unsuccessful, show error.
    
      };
    
    return (
        <div className='login-container'>
            <form onSubmit={login}>
                <h2>Please Login to continue</h2>
                <input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={formValues.username}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='password'
                    placeholder='Enter Password'
                    value={formValues.password}
                    onChange={handleChange}
                />
                <button>Login in</button>
                <p>Don't have an Account? Sign up<a href='#'>Here</a></p>
            </form>
        </div>
)
}