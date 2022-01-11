import { shallowEqual, useSelector } from "react-redux";
import CartNavbar from "../Components/Cart Components/CartNavbar";

const Cart = () => {
    const { cart, address, stage } = useSelector(state=> state, shallowEqual);
    console.log(cart);
    return (
        <div>
            <CartNavbar />
        </div>
    );
};

export default Cart;