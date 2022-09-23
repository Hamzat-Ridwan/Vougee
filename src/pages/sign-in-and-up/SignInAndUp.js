import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import './sign-in-and-up.scss'

const SignInAndUp = () => {
  return (
    <div className='sign-in-and-up'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInAndUp