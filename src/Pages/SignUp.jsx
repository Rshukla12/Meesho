import React, { useState } from 'react'
import "./SignUp.css"
import TextField from '@mui/material/TextField'
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const SignUp = () => {
    const NumberInput = styled(TextField)({
        boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      width:"80%",
      padding: '12px',
      margin:"auto",
    //   border: '1px solid',
      lineHeight: 1.5,
      '&:hover': {
          color: '#f43397',
        borderBottomColor: '1px solid pink',
        boxShadow: 'none',
      },
    });
    const [number,setNumber] = useState(""); 
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
        <p className='country_code'>Country</p>
        <div className='number'>
        <p className='Phone_number'>IN +91</p>
        {/* <NumberInput style={{width:"50px",marginLeft:"50px"}} className="country_code" id="standard-basic" value={"IN +91"} disabled label="Country"  variant="standard" /> */}
        <div className="inputField">
            <input placeholder='PhoneNumber' onChange={(e)=>setNumber(e.target.value)} className='number_input' value={number}/>
        </div>
        </div>
        <button onClick={(e)=>(e.preventDefault,console.log(number))} className='otp'>Send OTP</button>

        </div>
        </div>
        </>
    )
}
