import { useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from "./catagorypage.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getQuery } from "../Redux/action";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
function BasicSelect({params}) {
  const [filter, setFilter] = React.useState("");
  const dispatch = useDispatch();  
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(filter);
    var qurey = `${params}&_sort=${event.target.value}`
    dispatch(getQuery(qurey));
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"discounted_price&_order=asc"}>Price Low-high</MenuItem>
          <MenuItem value={"discounted_price&_order=desc"}>Price High-low</MenuItem>
          <MenuItem value={"rating&_order=desc"}>Rating high-low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
const Card = ({id,title,price,orignalPrice,url,rating})=>{
    return (
        <Link style={{textDecoration: 'none'}} to={`product/${id}`}>
        <div className={styles.card}>
            <div>
                <img className={styles.cardimg} src={url}/>
            </div>
            <div className={styles.tbox}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div className={styles.amount}>
                    <div className={styles.actualprice}>&#x20b9;{price}</div>
                    <div className={styles.discountprice}>&#x20b9;{orignalPrice}</div>
                    <div className={styles.discount}>{Math.floor(((orignalPrice-price)/orignalPrice)*100)}%off</div>
                </div>
                <div style={{color:'#999999'}}>
                    <i className='fas' style={{fontSize:'24px',color:'#5585F8',margin:'10px'}}>&#xf02c;</i>   &#x20b9;{orignalPrice-price} discount on 1st order
                </div>
                <div className={styles.free}>
                    Free Delivery
                </div>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    <div className={styles.rating}>
                    <span className="fa fa-star checked"></span>
                    {rating}
                    </div>
                    <AddShoppingCartIcon style={{marginTop:'8px',color:'#5585F8'}}/>
                </div>
            </div>
        </div>
        </Link>
    )
}
const Category = ()=>{
    const dispatch = useDispatch();
    var arr = [1,2,3,4,5];
    const data = useSelector((state)=>state.content.data);
    const query = useSelector((state)=>state.content.qurey);
    const [count,setCount] = React.useState(1);
    const config = {
        method: "GET",
        url:`https://fake-rjson-server-pro.herokuapp.com/products?category=${query}&_limit=12&_page=${count}`
    }
    React.useEffect(()=>{
        dispatch(getData(config))
    },[count,query])
    return (
        <div style={{marginTop:'200px'}}>
        <div className={styles.header}>{data[0]?.category}</div>
        <div className={styles.subheader}>
            <div style={{marginTop:'20px'}}><a style={{color:'#333D5A',fontWeight:'bold',marginRight:'10px'}}>Showing 1-12</a> out of 168445 Products</div>
            <FilterAltIcon className={styles.filt}/><BasicSelect params={data[0]?.category}/>
        </div>
        <div className={styles.container}>
            {data?.map((item)=>(
                <Card key={item.id} id={item.id} title={item.title} price={item.discounted_price} orignalPrice={item.original_price} url={item.images[0]} rating={item.rating}/>
            ))}
        </div>
        <div className={styles.pages}>
            {count!==1?(<span onClick={()=>{setCount((prev)=>prev-1)}}  style={{color:'rgb(244, 51, 151)',cursor:'pointer'}}>PREV</span>):("")}
            {arr.map((item)=>(
                count==item?(<div className={styles.round}>{item}</div>):(
                    <div>{item}</div>
                )
            ))}
            <span onClick={()=>{setCount((prev)=>prev+1)}} style={{color:'rgb(244, 51, 151)',cursor:'pointer'}}>NEXT</span>
        </div>
        </div>
    )
};
export default Category;