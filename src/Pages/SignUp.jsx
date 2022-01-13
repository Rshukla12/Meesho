import React from 'react'
import "./SignUp.css"
import TextField from '@mui/material/TextField'

export const SignUp = () => {
    return (
        <>
        <div className='sign_up'>
            <div className='signup_page'>
        <img 
        className='sign_up_img'
        src='https://meesho.com/_next/static/images/authTopBanner-6792b3e68f63d623b8ba99556d38d56d.jpg'
        alt='item.title'
        />
        <p className='sign_up_profile'>
            Sign Up to view your profile
        </p>
        <p className='country'>Country</p>
        <div className='number'>
        <p className='Phone_number'>IN +91</p>
        <TextField id="standard-basic" label="Phone Number" variant="standard" />
        </div>
        <button className='otp'>Send OTP</button>

        </div>
        </div>
        </>
    )
}
