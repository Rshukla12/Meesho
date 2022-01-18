import React from 'react'
import "./Product_add.css"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../Redux/Cart/actions';
import { useDispatch } from 'react-redux';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function TextRating({val}) {
  const value = val;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
export const Productcard = ({ url, title, discountAmt, Amt, rate, d1, d2, d3, d4, handleClick }) => {
    const [image,setImage] = React.useState(url[0]);
    return (
        <>
            <div className='complete_page'>
                <div className='left_side'>
                    <div className='left_small'>
                        {url.map((item)=>(
                            <img onClick={()=>{setImage(item)}} src={item}/>
                        ))}
                    </div>
                    <div className='left_big'>
                        <div className='left_big_img'>
                            <img src={image} />
                        </div>
                        <div className='left_big_p'>
                            <button onClick={handleClick} className='Add_to_card'><ShoppingCartIcon style={{marginTop: '5px',marginRight:'10px'}}/>Add To Cart</button>
                            <hr />
                            <p>1 Similar Products</p>
                            <img className='small_image' src={image} />
                        </div>
                    </div>
                </div>
                <div className='Right_side'>
                    <div className='first_box'>
                        <p>{title}</p>
                        <p><span>&#8377;</span>{discountAmt}<strike>{Amt}</strike>  <a>{Math.floor(((Amt - discountAmt) / Amt) * 100)}%off</a><CheckCircleIcon style={{marginLeft:'10px',color:'teal'}}/></p>
                        <p><LocalOfferIcon style={{ color: 'green', marginRight: '20px', marginTop: '5px' }} /><span>&#8377;</span> 40 OFF | Special Offer Applied <AddReactionIcon style={{color:'#F7C64B'}}/></p>
                        <p>Free Delivery</p>
                    </div>
                    <div className='second_box'>
                        <p>Select Size</p>
                        <button>Free Size</button>
                    </div>
                    <div className='third_box'>
                        <p>Product Details</p>
                        <p>Material : {d1}</p>
                        <p>Sole : {d2} PVC</p>
                        <p>Best Before 2023</p>
                        <p>Multipack : {d3}</p>
                        <p>Dscription :{d4}</p>
                    </div>
                    <div className='fourth_box'>
                        <p>Sold By</p>
                        <div className='fourth_mid_box'>
                            <img src='data:image/png;base64,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' alt='logo' />
                            <p>NIBBLE SHOES <img style={{marginTop:"5px",borderRadius:'4px'}} src="https://lh3.googleusercontent.com/V3G0OcaMs6mGJZ0AXf4e9dDKgRhFGvOPzKFI8nal3891-KEPHWuXporIOTM-svxZ8EWJxjM0HItTEYoaaekeUyVwlta5nVdLntXWmsxk"/></p>
                            <button>View Shop</button>
                        </div>
                        <div className='rating'>
                            <p style={{paddingTop:'12px'}}>Ratings :</p>
                            <TextRating val={rate}/>
                        </div>

                    </div>
                    <img style={{width: '65%',height:'60px',marginLeft:'-14%',marginTop:'25px'}} src='https://lh3.googleusercontent.com/m5-ROiK9V88ehQgK8UD24A0Dg9KYSGpPrcmPnuXORGgLOPTYGvR_ssIzVq0oULwRSCCm1JUhQFMB5o-ocgynk1efqp9sGH_EU2Rd0Krj'/>
                </div>
            </div>
            {/* Footer */}
            <div className="banner5">
                <div className="banner5tbox">
                    <h4>Shop Non-Stop on Meesho</h4>
                    <p>Trusted by more than 1 Crore Indians
                        Cash on Delivery | Free Delivery
                    </p>
                    <img src="https://meesho.com/_next/static/images/appstore-button-4b171cf04fe0557718dfd2cbf309c61d.png" />
                </div>
                <div>
                    <h4>Careers</h4>
                    <p>Become a supplier</p>
                </div>
                <div>
                    <h4>Legal and Policies</h4>
                    <p>Meesho Tech Blog</p>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>query@meesho.com</p>
                </div>
                <div>
                    <h4>Reach out to us</h4>
                    <img src="https://meesho.com/assets/instagram.png" />
                </div>
            </div>
        </>
    )
}
export const Productadd = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        const config = {
            method: 'get',
            url: `https://fake-rjson-server-pro.herokuapp.com/products?id=${id}`
        }
        axios(config)
            .then((res) => {
                setData(res.data);
            })
    }, [id])
    return (
        data ? (
            <Productcard handleClick={() => dispatch(addToCart(data[0]))} key={data[0]?.id} title={data[0]?.title} discountAmt={data[0]?.discounted_price} Amt={data[0]?.original_price} url={data[0]?.images} rate={data[0]?.rating} d1={data[0]?.details.Fabric} d2={data[0]?.details.Pattern} d3={data[0]?.details.Multipack} d4={data[0]?.details.description} />
        ) : (<div></div>)
    )
}
