import React, {useState} from 'react'
import './sign-up.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'

const SignUp = () => {
    const [details, setDetails] = useState({

        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = details
        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e =>{
        const {name, value} = e.target
        setDetails(prevDetails =>{
            return{
                ...prevDetails,
                [name]: value
            }
        })
    }

    const {displayName, email, password, confirmPassword} = details
  return (
    <div className='sign-up'>
        <h2 className='title'>SIGN UP</h2>
        <span>Sign Up With Your Email and Password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                handleChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                handleChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                handleChange={handleChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                handleChange={handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
        <span>Already have an account? <a href='/signin'>Sign in</a></span>
    </div>
  )
}

export default SignUp