import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { addAddress, changeCheckoutStage } from "../Redux/Cart/actions";
import CartDetails from "../Components/Cart Components/CartDetails";
import CartNavbar from "../Components/Cart Components/CartNavbar";
import PriceDetails from "../Components/Cart Components/PriceDetails";
import { useEffect, useState } from "react";

import styles from "./Cart.module.css";
import priceDetailsStyles from "../Components/Cart Components/PriceDetails.module.css";
import CartAddress from "../Components/Cart Components/CartAddress";

const Cart = () => {
    const { cart, stage } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    
    const [total, setTotal] = useState(0);
    const handleAddressSave = ( add ) => {
        dispatch( addAddress( add ) );
        dispatch( changeCheckoutStage( stage + 1 ) );
    }

    useEffect(()=>{
        let res = 0;
        cart?.forEach((curr) => res += ( curr.qty * curr.discounted_price ) );
        setTotal( res );
    }, [cart]);

    return (
        <div className={styles.root}>
            <CartNavbar active={stage} />
            {
                cart.length === 0 ? (
                    <div className={styles.empty}>
                        <img src="https://meesho.com/assets/Checkout/empty-cart.png" alt="empty-cart" />
                        <p>Your cart is empty</p>
                        <button style={{ padding: "1rem 2rem" }} className={priceDetailsStyles.continue}> View Products </button>
                    </div>
                ) : (
                    <div className={styles.main}>
                        {
                            stage === 1 ? ( 
                                <CartDetails
                                    cart={cart}
                                /> 
                            ) : stage === 2 ? (
                                <CartAddress handelSave={handleAddressSave}/>
                            ) : (
                                <div>stage 3</div>
                            )
                        }
                        <div className={styles.priceBar}>
                            <PriceDetails
                                totalPrice={total}
                                delivery={0}
                                cod={0}
                                first={true}
                                isContinue={stage!==2}
                                onContinue={()=>dispatch( changeCheckoutStage( stage === 4 ? 1 : stage + 1 ) )}
                            />
                            { stage === 1 && <img className={styles.helpImg} src="https://images.meesho.com/images/marketing/1588578650850.png" alt="safe meesho" />}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;