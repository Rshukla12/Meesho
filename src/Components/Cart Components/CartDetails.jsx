import { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import styles from "./CardDetails.module.css";

const CartDetails = ({cart}) => {
    const [qty, setQty] = useState(0);

    useEffect(()=>{
        let res = 0;
        cart.forEach((curr) => res += curr.qty );
        setQty( res );
    }, [cart]);

    return (
        <div className={styles.root}>
            <div className={styles.cartTotal}>
                <h5>Cart</h5>
                <p>{qty} Item</p>
            </div>
            <div className={styles.cards}>
                {
                    cart?.map( (item, ind )=> (
                        <div key={item.id}>
                            <CartItemCard
                                item={item}
                                handleEdit={()=>console.log(item)}
                            />
                            { (ind !== cart?.length - 1  )  && <hr />}
                        </div>

                    ))
                }
            </div>
        </div>
    )
};

export default CartDetails;