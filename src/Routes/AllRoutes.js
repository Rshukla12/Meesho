import { Route, Switch } from "react-router-dom"
import Category from "../Pages/catagorypage"
import Home from "../Pages/home";
import { createBrowserHistory } from 'history';
import CartRoutes from "./CartRoutes";
const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact={true} path="/cat">
                        <Category/>
                    </Route>
                    <Route path="/cart">
                        <CartRoutes />
                    </Route>
                </Switch>
        </>
    )
}
export default AllRoutes