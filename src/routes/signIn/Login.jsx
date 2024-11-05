import { SignIn } from '@clerk/clerk-react';
import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='signInPage'>
            <SignIn path="/sign-in" signUpUrl='/sign-up' />
        </div>
    )
}

export default Login;