import {applyMiddleware, createStore,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import cartReducer from "./Cart/reducers";
import sellerReducer from "./Seller/reducers";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({ cart: cartReducer,  content: reducer, seller: sellerReducer });

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;