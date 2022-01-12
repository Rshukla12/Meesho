import { useSelector } from "react-redux";
import styles from "./catagorypage.module.css";
const Card = ({title,price,orignalPrice,url,rating})=>{
    return (
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
                    <i class='fas' style={{fontSize:'24px',color:'#5585F8',margin:'10px'}}>&#xf02c;</i>   &#x20b9;{orignalPrice-price} discount on 1st order
                </div>
                <div className={styles.free}>
                    Free Delivery
                </div>
                <div className={styles.rating}>
                    <span class="fa fa-star checked"></span>
                    {rating}
                </div>
            </div>
        </div>
    )
}
const Category = ()=>{
    const data = useSelector((state)=>state.data);
    // console.log(data.map((item)=>(
    //     console.log(item.images)
    // )))
    console.log(data)
    return (
        <div  className={styles.container}>
            {data?.map((item)=>(
                <Card title={item.title} price={item.discounted_price} orignalPrice={item.original_price} url={item.images[0]} rating={item.rating}/>
            ))}
        </div>
    )
};
export default Category;