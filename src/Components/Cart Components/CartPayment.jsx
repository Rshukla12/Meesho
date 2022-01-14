import { ReactComponent as CashIcon } from "../../SVG/CashIcon.svg"
import { ReactComponent as TickIcon } from "../../SVG/GreenTickIcon.svg"
import InputField from "./Input/InputField";

import styles from "./CartPayment.module.css";

const CartPayment = ({ 
    cartTotal, 
    isResell = false,
    setIsResell,
    margin,
    setMargin,
    isSummary=false
}) => {
    return (
        <div className={styles.root}>
            <div>Payment Method</div>
            <div className={styles.payment} >
                <CashIcon />
                <div>
                    Cash on Delivery
                </div>
                { !isSummary ? <TickIcon /> : <div></div> }
            </div>

            { !isSummary && (
                <div className={styles.main} >
                    <div className={styles.mainBar} >
                        <div className={styles.mainTitle}>
                            <div>Reselling  the Order?</div>
                            <div>Click on 'Yes' to add Final Price</div>
                        </div>
                        <div className={styles.btns} >
                            <div className={ isResell ? styles.btn : styles.activeBtn } onClick={()=>setIsResell(false)}>No</div>
                            <div className={ isResell ? styles.activeBtn : styles.btn } onClick={()=>setIsResell(true)}>Yes</div>
                        </div>
                    </div>
                    {
                        isResell && (
                            <div className={styles.resell}>
                                <div>Cash to be Collected</div>
                                <InputField
                                    name="margin"
                                    label={`Order Total ( ₹${ cartTotal} ) + Your Margin`}
                                    isError={ margin > cartTotal * 1.7 || margin < cartTotal }
                                    error={`Amount greater than or equal to ₹ ${cartTotal} and less than or equal to ₹ ${ Math.round(cartTotal * 1.7) }`}
                                    value={margin}
                                    onChange={(e)=> setMargin(e.target.value)}
                                    required={true}
                                    type="number"
                                    initiallyFocused={true}
                                />
                                <div className={`${styles.margin} ${margin-cartTotal < 0 ? styles.red : styles.green }`} >
                                    Your Margin: ₹ { margin-cartTotal }
                                </div>
                                <div className={styles.bottom}>
                                    Final Price is printed on the invoice
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
};

export default CartPayment;