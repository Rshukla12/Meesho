import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { addAddress, changeCheckoutStage } from "../../Redux/Cart/actions";
import CartNavbar from "../../Components/Cart Components/CartNavbar";
import PriceDetails from "../../Components/Cart Components/PriceDetails";
import { useEffect, useState } from "react";

import styles from "./Cart.module.css";
import CartAddress from "../../Components/Cart Components/CartAddress";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CheckoutPage = () => {
    const { cart, stage } = useSelector(state => state.cart, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const [total, setTotal] = useState(0);
    
    const handleAddressSave = ( add ) => {
        dispatch( addAddress( add ) );
        dispatch( changeCheckoutStage( 3 ) );
        history.push("/cart/payment");
    }

    useEffect(()=>{
        let res = 0;
        cart?.forEach((curr) => res += ( curr.qty * curr.discounted_price ) );
        setTotal( res );
        dispatch( changeCheckoutStage( 2 ) );
    }, [cart]);

    if ( stage < 2 ) return <Redirect to="/cart" />;

    return (
        <div className={styles.root}>
            <CartNavbar active={stage} />
            <div className={styles.main}>
                <CartAddress handelSave={handleAddressSave}/>
                <div className={styles.priceBar}>
                    <PriceDetails
                        totalPrice={total}
                        delivery={0}
                        cod={0}
                        first={true}
                        isContinue={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;