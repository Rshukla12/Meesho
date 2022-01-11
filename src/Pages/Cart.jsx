import { shallowEqual, useSelector } from "react-redux";
import CartNavbar from "../Components/Cart Components/CartNavbar";
import PriceDetails from "../Components/Cart Components/PriceDetails";

const Cart = () => {
    const { cart, address, stage } = useSelector(state=> state, shallowEqual);
    console.log(cart);
    return (
        <div>
            <CartNavbar />
            <PriceDetails
                totalPrice={100}
                delivery={50}
                cod={30}
                first={true}
                isContinue={true}
            />
        </div>
    );
};

export default Cart;