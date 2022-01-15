import { useEffect, useState } from "react"

import {ReactComponent as CartPlusIcon} from '../../SVG/CartPlusIcon.svg';
import {ReactComponent as CartMinusIcon} from '../../SVG/CartMinusIcon.svg';

import itemStyles from "./CartItemCard.module.css";
import priceStyles from "./PriceDetails.module.css";
import styles from "./CartModalItem.module.css";

const CartModalItem = ({ item, handleDelete, handleSave  }) => {
    const [qty, setQty] = useState( 0 );
    const [price, setPrice] = useState( item.qty * item.discounted_price );
    const name = item.title.length > 38 ? item.title.slice( 0, 35 ) + " ..." : item.title;
    
    useEffect(()=> {
        setQty( item.qty );
    }, [item]);

    useEffect(() => { 
        setPrice( qty * item.discounted_price );
    }, [item.discounted_price, qty]);

    return (
        <div className={styles.root}>
            <div className={itemStyles.root}>
                <img className={itemStyles.img} src={item.images[0]} alt={item.title} />
                <div className={itemStyles.details}>
                    <h2 className={itemStyles.title}>{name}</h2>
                    <div className={`${itemStyles.meta} ${styles.meta}`} >
                        <p>Size: 
                            <span className={styles.bgPad}>
                                {item.sizes[0]}
                            </span>
                        </p>
                        <p>Qty
                            <span className={styles.bgPad}>
                                <span onClick={()=>setQty( prev => prev > 1 ? prev - 1 : prev )}>
                                    <CartMinusIcon />
                                </span>
                                <span>
                                    { qty }
                                </span>
                                <span onClick={()=>setQty( prev => prev + 1 )}>
                                    <CartPlusIcon />
                                </span>
                            </span>
                        </p>
                    </div>
                    <p className={itemStyles.price}>&#8377;{item.discounted_price}</p>
                </div>
                <div className={itemStyles.btn} onClick={handleDelete}>Remove</div>
            </div>
            <div className={styles.totalPrice}>
                <h1>Total Price</h1>
                <h1>&#8377;{price}</h1>
            </div>
            <div className={styles.bottomBtn}>
                <button className={`${priceStyles.continue} ${styles.saveChanges}`} onClick={()=>handleSave(qty)}>Save Changes</button>
            </div>
        </div>
    )
};

export default CartModalItem;