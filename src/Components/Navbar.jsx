import styles from "./navbar.module.css";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HistoryIcon from '@mui/icons-material/History';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getQuery } from "../Redux/action";
const NavBar =()=>{
    const dispatch = useDispatch();
    const [params,setParms] = React.useState(null);
    const [results,setResults] = React.useState(null);
    const [view,setView] = React.useState(false);
    const GetItem = ()=>{
        const data = [];
        for(var i = localStorage.length-2;i>=2;i--){
             data.push(JSON.parse(localStorage.getItem(i)));
        }
        return (
            <div>
                {data.map((item)=>(
                    <div className={styles.res}>
                        <HistoryIcon/>
                        <div className={styles.rest}>{item}</div>
                    </div>
                ))}
            </div>
        )
    }
    React.useEffect(()=>{
        const config = {
            method: 'get',
            url : `http://localhost:3001/products?q=${params}&_limit=5&_page=1`
        }
        axios(config)
        .then((res)=>{
            setResults(res.data)
            res.data.map((el,index)=>{
                localStorage.setItem(index,JSON.stringify(el.title))
            })
        })
    },[params]);
    const getMenswares = ()=>{
        dispatch(getQuery("Mens Top Were"))
    }
    const getSares = ()=>{
        dispatch(getQuery("Sarees"))
    }
    const getDreses = ()=>{
        dispatch(getQuery("Dresses"))
    }
    const getBeautypods = ()=>{
        dispatch(getQuery("Beauty and health"))
    }
    const getJewellery = ()=>{
        dispatch(getQuery("Jewellery"))
    }
    const getBags = ()=>{
        dispatch(getQuery("Bags and Footwear"))
    }
    const getHome = ()=>{
        dispatch(getQuery("Home and Kitchen"))
    }
    const SignUpButton = styled(Button)({
    boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  width:"80%",
  padding: '12px',
  margin:"auto",
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#f43397',
  borderColor: '#f43397',
  '&:hover': {
    backgroundColor: '#f43397',
    borderColor: '#f43397',
    boxShadow: 'none',
  },
});
    return(
    <>
    <div className={styles.Main_Header}>
        <div>
        <div className={styles.upper}>
            <div className={styles.header_conatainer}>
                <Link to='/'>
                <div className={styles.header_logo}>
                    <img src="https://miro.medium.com/max/1200/1*vNRDrFBkpQ9CtWZ33fScng.png" alt="Header_Logo" />
                </div>
                </Link>
                <div className={styles.Search_Input}>
                    <div className={styles.icon}>
                    <SearchIcon/>
                    </div>
                    <input onClick={()=>{setView(!view);setResults(null)}} onChange={(e)=>{setParms(e.target.value)}} className={styles.search_input} type="text" placeholder="Try Saree, Kurti or Search by Product Code"/>
                </div>
                <div className={styles.cards_container}>
                    <div className={styles.downloadCard}>
                    <div  className={styles.cards}>
                        <PhoneAndroidIcon className={styles.android}/>
                        <p>Download App</p>
                        <div className={styles.dropdownContent}>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                        </div>
                    </div>
                    </div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div>Become A Supplier</div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div className={styles.profileCard}>
                    <div className={styles.profile}>
                        <PermIdentityIcon/>
                        <p>Profile</p>
                        <div className={styles.profileContent}>
                            <p style={{fontSize :"18px",marginBlockStart:"0.5em",marginBlockEnd:"0.2em",fontWeight:"bold"}}>Hello User</p>
                            <p style={{fontSize:"12px",marginBlockEnd:"0.5em"}}>To access your Meesho account</p>
                            <SignUpButton variant="contained">SIGN UP</SignUpButton>
                            <div className={styles.dividerLines}></div>
                            <h4 style={{alignItems:"center"}}><ShoppingBagIcon fontSize="medium"/>My Orders</h4>

                        </div>
                    </div>
                    </div>

                    <div>
                        <ShoppingCartIcon/>
                        <p>Cart</p>
                    </div>


                </div>
            
            </div>
        </div>
        </div>
        <div className={styles.dividerLines}></div>
        <div className={styles.links}>
            <Link onClick={getMenswares} to="/cat">Mens Wear</Link>
            <Link onClick={getDreses} to="/cat">Womes Were</Link>
            <Link onClick={getSares} to="/cat">Sarees</Link>
            <Link onClick={getJewellery} to="/cat">Jewellery</Link>
            <Link onClick={getDreses} to="/cat">Dresses</Link>
            <Link onClick={getBeautypods} to="/cat">Beautiy Products</Link>
            <Link onClick={getBeautypods} to="/cat">Health Products</Link>
            <Link onClick={getBags} to="/cat">Baga and Footwear</Link>
            <Link onClick={getHome} to="/cat">Home</Link>
            <Link onClick={getHome} to="/cat">Kitchen</Link>
        </div>
    </div>
    {view?(
    <div className={styles.url}>
        {results!=null?(results.map((item)=>(
            <div className={styles.res}><SearchIcon/>
            <div className={styles.rest}>{item.title}</div>
            </div>
        ))):(<div>
            <div style={{padding:'1rem',fontSize:'18px',fontWeight:'bold',color:'rgb(102, 102, 102)'}}>
                recent search</div>
            <GetItem/>
        </div>)}
    </div>):(<div>
        
    </div>)}
    </>
    )
}

export default NavBar;