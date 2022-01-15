import { Route, Switch } from "react-router-dom"
import Category from "../Pages/catagorypage"
import Home from "../Pages/home";
import { Productadd } from "../Pages/Productadd";
import CartRoutes from "./CartRoutes";
const AllRoutes = ()=>{
    return (
        <>
                
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/cat">
                <Category/>
            </Route>
            <Route exact path="/cart">
                <CartRoutes />
            </Route>
            <Route exact path="/cart/:id">
                <Productadd/>
            </Route>
                
        </>
    )
}
export default AllRoutes