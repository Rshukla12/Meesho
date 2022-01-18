import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartNavbar from "../../Components/Cart Components/CartNavbar";
import PriceDetails from "../../Components/Cart Components/PriceDetails";
import { changeCheckoutStage, orderSuccessful } from "../../Redux/Cart/actions";

import styles from "./Cart.module.css";

import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartDetails from "../../Components/Cart Components/CartDetails";
import CartPayment from "../../Components/Cart Components/CartPayment";
import AddressCard from "../../Components/Cart Components/AddressCard";
import { Alert, Slide, Snackbar } from "@mui/material";

export function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

const SummaryPage = () => {
    const { cart, margin, address, stage } = useSelector(state => state.cart, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [ total, setTotal ] = useState( 0 );
    const [open, setOpen] = useState(false);

    const handleContinue = () => {
        dispatch( changeCheckoutStage( 1 ) );
        dispatch( orderSuccessful() );
        history.push("/");
    };

    useEffect(()=>{
        let res = 0;
        cart?.forEach((curr) => res += ( curr.qty * curr.discounted_price ) );
        setTotal( res );
        dispatch( changeCheckoutStage( 4 ) );
    }, [cart]);

    if ( stage < 4 ) return <Redirect to="/cart" />
    
    return (
        <div className={styles.root}>
            <CartNavbar active={stage} />
            <div className={styles.main}>
                <div className={styles.summary}>
                    <CartDetails isSummary={true} cart={cart} />
                    { address[0] && (
                        <>
                            <div style={{textAlign:"left", fontSize: "1.2rem", margin: "1rem 0rem"}}>
                                Address Details
                            </div>
                            <AddressCard add={address[0]} /> 
                        </>
                    )}
                    <CartPayment isSummary={true} />
                </div>
                
                <div className={styles.priceBar}>
                    <PriceDetails
                        totalPrice={total}
                        delivery={0}
                        cod={0}
                        first={true}
                        isContinue={true}
                        onContinue={()=>setOpen(true)}
                        margin={margin}
                        cash={true}
                    />
                </div>
            </div>
            <Snackbar open={open}  TransitionComponent={TransitionDown} anchorOrigin={{ vertical: 'top', horizontal: 'center'} } autoHideDuration={2000} onClose={handleContinue}>
                <Alert onClose={handleContinue} severity="success" sx={{ width: '100%', minWidth: "30rem" }}>
                    Order Placed Successfully!
                </Alert>
            </Snackbar>
        </div>
    )
};

export default SummaryPage;