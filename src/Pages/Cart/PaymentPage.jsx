import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartNavbar from "../../Components/Cart Components/CartNavbar";
import PriceDetails from "../../Components/Cart Components/PriceDetails";
import { changeCheckoutStage } from "../../Redux/Cart/actions";

import styles from "./Cart.module.css";
import priceDetailsStyles from "../../Components/Cart Components/PriceDetails.module.css";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PaymentPage = () => {
    const { cart, stage } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [total, setTotal] = useState(0);

    const handleContinue = () => {
        dispatch( changeCheckoutStage( 4 ) );
        history.push("/cart/checkout");
    };


    useEffect(()=>{
        let res = 0;
        cart?.forEach((curr) => res += ( curr.qty * curr.discounted_price ) );
        setTotal( res );
    }, [cart]);

    if ( stage !== 3 ) return <Redirect to="/cart" />

    return (
        <div className={styles.root}>
            <CartNavbar active={stage} />
            <div className={styles.main}>
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