import { useSelector } from "react-redux";
import styles from "./catagorypage.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import {Link} from 'react-router-dom';
const Card = ({id,title,price,orignalPrice,url,rating})=>{
    return (
        <Link style={{textDecoration: 'none'}} to={`cart/${id}`}>
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
                <div>
                    <i className='fas' style={{fontSize:'24px',color:'#5585F8',margin:'10px'}}>&#xf02c;</i>   &#x20b9;{orignalPrice-price} discount on 1st order
                </div>
                <div className={styles.free}>
                    Free Delivery
                </div>
                <div className={styles.rating}>
                    <span className="fa fa-star checked"></span>
                    {rating}
                </div>
            </div>
        </div>
        </Link>
    )
}
const Category = ()=>{
    const dispatch = useDispatch();
    var arr = [1,2,3,4,5];
    const data = useSelector((state)=>state.data);
    const query = useSelector((state)=>state.qurey);
    const [count,setCount] = React.useState(1);
    const config = {
        method: "GET",
        url:`http://localhost:3001/products?category=${query}&_limit=12&_page=${count}`
    }
    React.useEffect(()=>{
        dispatch(getData(config))
    },[count,query])
    return (
        <div style={{marginTop:'200px'}}>
        <div className={styles.header}>{data[0]?.category}</div>
        <div style={{textAlign:'left',marginTop:'20px',marginLeft:'100px'}}>Showing 1-20 out of 168445 Products</div>
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