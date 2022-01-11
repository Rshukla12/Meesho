import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { changeCheckoutStage } from "../Redux/Cart/actions";
import CartDetails from "../Components/Cart Components/CartDetails";
import CartNavbar from "../Components/Cart Components/CartNavbar";
import PriceDetails from "../Components/Cart Components/PriceDetails";

const Cart = () => {
    const { cart, address, stage } = useSelector(state=> state, shallowEqual);
    const dispatch = useDispatch();
    console.log(cart);
    return (
        <div>
            {
                cart.length === 0 ? (
                    <div>
                        <img src="https://meesho.com/assets/Checkout/empty-cart.png" alt="empty-cart" />
                        <p>Your cart is empty</p>
                        <button> View Products </button>
                    </div>
                ) : (
                    <div>
                        <CartNavbar active={stage} />
                        <div style={{display: "flex"}}>
                            <CartDetails
                                cart={cart}
                            />
                            <PriceDetails
                                totalPrice={100}
                                delivery={50}
                                cod={30}
                                first={true}
                                isContinue={true}
                                onContinue={()=>dispatch( changeCheckoutStage( stage === 4 ? 1 : stage + 1 ) )}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;