import React, { useState } from 'react';

const initialSignUpValues = {
    name:'',
    email:'',
    username:'',
    password:''
}
export default function SignUp(){
    const [formSignUpValues, setFormSignUpValues] = useState(initialSignUpValues);

    const handleSignUpChanges = (event) => {
        setFormSignUpValues({...formSignUpValues,
        [event.target.name]: event.target.value })
    }

    return(
        <div>
            <form>
                <h2>Create an Account</h2>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                value={formSignUpValues.name}
                onChange={handleSignUpChanges}
                />
                <input 
                type='email'
                name='email'
                placeholder='email'
                value={formSignUpValues.email}
                onChange={handleSignUpChanges}
                />
                <input 
                type='text'
                name='username'
                placeholder='Username'
                value={formSignUpValues.username}
                onChange={handleSignUpChanges}
                />
                <input 
                type='text'
                name='password'
                placeholder='Password'
                value={formSignUpValues.password}
                onChange={handleSignUpChanges}
                />
                <button>Sign Up</button>
                <p>Already have an Account? Login<a href='#'>here</a></p>
            </form>
        </div>
    )
}