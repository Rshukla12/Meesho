import { Route, Switch } from "react-router-dom"
import Cart from "../Pages/Cart/Cart";
import CheckoutPage from "../Pages/Cart/CheckoutPage";
import PaymentPage from "../Pages/Cart/PaymentPage";
import SummaryPage from "../Pages/Cart/SummaryPage";

const CartRoutes = () => {
    return (
        <Switch>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/cart/checkout">
                <CheckoutPage />
            </Route>
            <Route exact path="/cart/payment">
                <PaymentPage />
            </Route>
            <Route exact path="/cart/summary">
                <SummaryPage />
            </Route>
            <Route>
                <div>Not Found</div>
            </Route>
        </Switch>
    );
};

export default CartRoutes;