import React from 'react'
import "./Product_add.css"
export const Product_add = () => {
    return (
        <>
          <div className='complete_page'>
              <div className='left_side'>
               <div className='left_small'>
                <img src='https://images.meesho.com/images/products/71525367/0aqnh_64.jpg'/>
                <img src='https://images.meesho.com/images/products/71525367/im8mr_64.jpg'/>
                <img src='https://images.meesho.com/images/products/71525367/shdd9_64.jpg'/>
                <img src='https://images.meesho.com/images/products/71525367/f5fbt_64.jpg'/>
               </div>
               <div className='left_big'>
                   <img src='https://images.meesho.com/images/products/71525367/0aqnh_512.jpg'/>
                   <button className='Add_to_card'>Add To Cart</button>
                   <hr/>
                   <p>1 Similar Products</p>
                   
                   <img src='https://images.meesho.com/images/products/71525367/0aqnh_64.jpg'/>
               </div>
              </div>
              <div className='Right_side'>

              </div>
              </div>  
        </>
    )
}
