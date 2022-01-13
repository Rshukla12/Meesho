import {applyMiddleware, createStore,compose} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
export default store;