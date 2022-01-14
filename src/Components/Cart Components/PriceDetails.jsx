import styles from "./PriceDetails.module.css";

const PriceDetails = ({
    totalPrice,
    cod=0,
    delivery=0,
    first=true,
    isContinue=false,
    onContinue,
    margin=0,
    cash=false
}) => {
    const discount = totalPrice * 0.25 > 100 ? 100 : totalPrice * 0.25 ;
    let orderTotal = totalPrice + cod + delivery;
    orderTotal -= first ? discount : 0;
    return (
        <div className={styles.root}>
            <h3>Price Details</h3>
            <div className={styles.priceItem}>
                <p>Product Charges</p>
                <h5>&#8377;{totalPrice}</h5>
            </div>
            <div className={styles.priceItem}>
                <p>Delivery Charges</p>
                <h5>+&#8377;{delivery}</h5>
            </div>
            <div className={styles.priceItem}>
                <p>COD Charges</p>
                <h5>+&#8377;{cod}</h5>
            </div>
            { first && (
                <div className={styles.priceItem}>
                    <p>1st Order Discount</p>
                    <h5>-&#8377;{discount}</h5>
                </div>
            )}
            <div className={`${styles.priceItem} ${styles.total}`}>
                <h3>Order Total</h3>
                <h5>&#8377;{orderTotal}</h5>
            </div>
            { margin ? (
                <>
                    <div className={styles.priceItem}>
                        <h3>Margin Earned</h3>
                        <h5>+&#8377;{margin}</h5>
                    </div>
                    <div className={`${styles.priceItem} ${styles.total}`}>
                        <h3>Cash to be Collected</h3>
                        <h5>&#8377;{orderTotal + margin }</h5>
                    </div>
                </>
            ) : ( <></> )}
            { isContinue && (
                <>
                    { !cash && <div className={styles.banner}>Clicking on ‘Continue’ will not deduct any money</div> }
                    <button className={styles.continue} onClick={onContinue}>{ cash ? "Place Order" : "Continue" }</button>
                </>
            )}
        </div>
    );
};

export default PriceDetails