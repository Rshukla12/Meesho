import { Route, Router, Switch } from "react-router-dom"
import Category from "../Pages/catagorypage"
import Home from "../Pages/home";
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
                </Switch>
        </>
    )
}
export default AllRoutes