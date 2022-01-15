import React, { useEffect } from 'react'
import "./SignUp.css"

export const Otp = () => {
    const ran = ()=>{
        return Math.floor(Math.random() *10)
    }
    const a = ran()
    const b = ran()
    const c = ran()
    const d = ran()
    function sendOtp(){
        window.alert(`Your Otp is ${a}${b}${c}${d}`)
    }
    // useEffect(()=>{
    //     sendOtp()
    // },[])
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
        <input type="text" className='otp_input' />
        <input type="text" className='otp_input' />
        <input type="text" className='otp_input' />
        <input type="text" className='otp_input' />
        <button className='otp'>Verify</button>
        <button onClick={sendOtp} className='otp'>Resend</button>
        </div>
        </div>  
        </>
    )
}
