import styles from "./PriceDetails.module.css";

const PriceDetails = ({
    totalPrice,
    cod=0,
    delivery=0,
    first=true,
    isContinue=false,
    onContinue,
    margin=0
}) => {
    const discount = totalPrice * 0.25 > 100 ? 100 : totalPrice * 0.25 ;
    let orderTotal = totalPrice + cod + delivery;
    orderTotal -= first ? discount : 0;
    orderTotal -= margin;
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
            { margin ? (
                <div className={styles.priceItem}>
                    <p>Margin</p>
                    <h5>+&#8377;{margin}</h5>
                </div>
            ) : ( <></> )}
            <div className={`${styles.priceItem} ${styles.total}`}>
                <h3>Order Total</h3>
                <h5>&#8377;{orderTotal}</h5>
            </div>
            { isContinue && (
                <>
                    <div className={styles.banner}>Clicking on ‘Continue’ will not deduct any money</div>
                    <button className={styles.continue} onClick={onContinue}>Continue</button>
                </>
            )}
        </div>
    );
};

export default PriceDetails