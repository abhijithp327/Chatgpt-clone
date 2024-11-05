import { SignIn } from '@clerk/clerk-react';
import React from 'react'

const Login = () => {
    return (
        <div className='signInPage'>
            <SignIn path="/sign-in" />
        </div>
    )
}

export default Login;