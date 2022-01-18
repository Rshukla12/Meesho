import { Alert, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { TransitionDown } from './Seller Portal/AddProductPage'
import "./SignUp.css"

export const Otp = () => {
    // const ran = ()=>{
    //     return Math.floor(Math.random() *10)
    // }
    const [otpIs, setOtp] = useState([])
    const [isOpen, setIsOpen] = useState(true);
    const otp = new Array(6).fill(0).map(() => Math.floor(Math.random() * 10))
    useEffect(() => {
        setOtp(otp);
    }, [])
    var number = localStorage.getItem("phone")
    // sendOtp()
    if (!number) {
        return <Redirect to="/signup" />
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
                        Enter OTP sent to {localStorage.getItem("phone")}<br />
                        <a href="#" style={{ color: "#f43397", textDecoration: "none", }} onClick={() => window.location.replace("signup")} >Change Number</a>
                    </p>
                    {otpIs.map((e) => {
                        return <input key={Math.random()} type="text" onChange={console.log()} className='otp_input' value={e} />
                    })}

                    <button onClick={() => window.location.replace("/")} className='otp'>Verify</button>
                    <button onClick={()=>setIsOpen(true)} className='otp'>Resend</button>
                </div>
            </div>
            <Snackbar open={isOpen} TransitionComponent={TransitionDown} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={() => setIsOpen(false)} autoHideDuration={2000}>
                <Alert onClick={() => setIsOpen(false)} severity="success" sx={{ width: '100%', minWidth: "30rem" }}>
                    Your Otp Will Be Auto Filled!
                </Alert>
            </Snackbar>
        </>
    )
}
