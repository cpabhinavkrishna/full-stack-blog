import React from 'react'
import {SignIn} from '@clerk/clerk-react';
const LoginPage = () => {
  return (
    <div>
      <SignIn signUpUrl="/register" />
    </div>
  )
}

export default LoginPage
