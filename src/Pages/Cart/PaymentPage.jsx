import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartNavbar from "../../Components/Cart Components/CartNavbar";
import PriceDetails from "../../Components/Cart Components/PriceDetails";
import { addMargin, changeCheckoutStage } from "../../Redux/Cart/actions";

import styles from "./Cart.module.css";

import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartPayment from "../../Components/Cart Components/CartPayment";

const PaymentPage = () => {
    const { cart, stage } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [ total, setTotal ] = useState( 0 );
    const [ isResell, setIsResell ] = useState( false );
    const [ margin, setMargin ] = useState("");

    const handleContinue = () => {
        dispatch( changeCheckoutStage( 4 ) );
        isResell && dispatch( addMargin( margin ) );
        history.push("/cart/checkout");
    };

    useEffect(()=>{
        let res = 0;
        cart?.forEach((curr) => res += ( curr.qty * curr.discounted_price ) );
        setTotal( res );
        dispatch( changeCheckoutStage( 3 ) );
    }, [cart]);

    if ( stage !== 3 ) return <Redirect to="/cart" />

    return (
        <div className={styles.root}>
            <CartNavbar active={stage} />
            <div className={styles.main}>
                <CartPayment 
                    cartTotal={total} 
                    isResell={isResell}
                    setIsResell={setIsResell}
                    margin={margin}
                    setMargin={setMargin}
                />
                <div className={styles.priceBar}>
                    <PriceDetails
                        totalPrice={total}
                        delivery={0}
                        cod={0}
                        first={true}
                        isContinue={true}
                        onContinue={handleContinue}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;