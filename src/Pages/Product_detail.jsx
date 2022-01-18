import React, { useState } from 'react'
import axios from 'axios'
export const Product_detail = () => {
    const[toshow,setToshow]=useState()

    React.useEffect(()=>{
         toset()

    },[])
     const toset=()=>{
        axios.get("https://fake-rjson-server-pro.herokuapp.com/products").then((x)=>{
            setToshow(x.data)    
        console.log(x)
        })
      }
    

    return (
        <div>
          {toshow?.map((item)=>(
               
                <p> title={item.title} price={item.discounted_price} orignalPrice={item.original_price}  rating={item.rating}</p>
            ))}

        </div>
    )}