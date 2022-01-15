import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import "./SignUp.css"

export const Otp = () => {
    // const ran = ()=>{
    //     return Math.floor(Math.random() *10)
    // }
    const [otpIs,setOtp] = useState([])
    const otp = new Array(6).fill(0).map(()=>Math.floor(Math.random() *10))
useEffect(()=>{
    setOtp(otp)
    sendOtp()
},[])
    var number = localStorage.getItem("phone")
    console.log("number",number);
    console.log("otp",otpIs);

    function sendOtp(){
        window.alert(`Your Otp Will Be Auto Filled`)
    }
    // sendOtp()
    if(!number){
       return <Redirect to="/signup"/>
    }
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
            Enter OTP sent to {localStorage.getItem("phone")}<br/>
        <a href ="#" style={{color:"#f43397", textDecoration:"none",}} onClick={()=>window.location.replace("signup")} >Change Number</a>
        </p>
        {otpIs.map((e)=>{
            return <input key={Math.random()} type="text" onChange={console.log()} className='otp_input' value={e}/> 
        })}

        <button onClick={()=>window.location.replace("/")} className='otp'>Verify</button>
        <button onClick={sendOtp} className='otp'>Resend</button>
        </div>
        </div>  
        </>
    )
}
