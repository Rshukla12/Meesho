import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import CartRoutes from "./CartRoutes";
import NavBar from "../Components/Navbar";
import Home from "../Pages/home";
import Category from "../Pages/catagorypage"
import { SignUp } from "../Pages/SignUp";
import { Productadd } from "../Pages/Productadd";
import { Otp } from "../Pages/Otp";
import AddProductPage from "../Pages/Seller Portal/AddProductPage";

const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        <Home/>
                    </Route>
                    <Route exact={true} path="/cat">
                        <NavBar/>
                        <Category/>
                    </Route>
                    <Route exact={true} path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact={true} path="/otp">
                        <Otp />
                    </Route>
                    <Route exact={true} path="/product/:id">
                        <NavBar/>
                        <Productadd />
                    </Route>
                    <Route exact={true} path="/seller">
                        <NavBar />
                        <AddProductPage />
                    </Route>
                    <Route path="/cart">
                        <CartRoutes />
                    </Route>
                </Switch>
        </>
    )
}
export default AllRoutes