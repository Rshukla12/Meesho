import React, { useState } from 'react'
import "./SignUp.css"
import TextField from '@mui/material/TextField'
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import InputField from "../Components/Cart Components/Input/InputField"
export const SignUp = () => {
    const [number,setNumber] = useState(""); 
    const history = useHistory();
    const setMobileNumber = (e) => {
      setNumber(
          e.target.value);
  };
  function handleSubmit(e){
      e.preventDefault()
    if(number.length == 10){
      localStorage.setItem("phone",number)
          console.log(number)
          history.push("/otp")
    }
    else{
        window.alert("Enter Valid Number")
    }
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
            Sign Up to view your profile
        </p>
        <p className='country_code'>Country</p>
        <div className='number'>
        <p className='Phone_number'>IN +91</p>
        <div className="numberField">
        <InputField 
                    // className="number_input"
                    type="number"
                    name="phone" 
                    required={true}            
                    val={number} 
                    isError={false}
                    maxLen={10}
                    onChange={setMobileNumber} 
                    label="Phone Number" 
                />
          </div>
        </div>
        <button style={{cursor:"pointer"}} onClick={handleSubmit} className='otp'>Send OTP</button>

        </div>
        </div>
        </>
    )
}
