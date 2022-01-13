import React from 'react'
import "./SignUp.css"

export const Otp = () => {
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
            Enter OTP sent to 6388536699
        </p>
        
        <button className='otp'>Verify</button>
        </div>
        </div>  
        </>
    )
}
