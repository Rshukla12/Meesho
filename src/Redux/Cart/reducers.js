import { loadData } from "../../utils/localStorage";
import cartConstants from "./actionTypes";

const cart =  loadData("Cart");
const address =  loadData("Address");

const initCart = {
    stage: 1,
    address: address || [],
    cart: cart || [],
    orders: []
};

const cartReducer = ( state=initCart, action ) => {
    switch ( action.type ){
        case cartConstants.ADD_ADDRESS: {
            return {
                ...state,
                cart: state.address.push( action.payload.address )
            }
        }
        case cartConstants.ADD_TO_CART: {
            return {
                ...state,
                cart: state.cart.push( action.payload.product )
            }
        }
        case cartConstants.CHANGE_QTY: {
            const updatedCart = state.cart.map( prod => (
                action.payload.id === prod.id ? {
                    ...prod,
                    qty: action.payload.qty 
                } : prod 
            ));

            return {
                ...state,
                cart: updatedCart
            }
        }
        case cartConstants.REMOVE_FROM_CART: {
            const updatedCart = state.cart.filter( prod => (
                action.payload.id !== prod.id 
            ));
            return {
                ...state,
                cart: updatedCart
            }
        }
        case cartConstants.CHANGE_CHECKOUT_STAGE: {
            return {
                ...state,
                stage: action.payload.stage
            }
        }
        case cartConstants.ORDER_SUCCESSFUL: {
            return {
                ...state,
                stage: 1,
                orders: state.orders.push( action.payload.cart )
            }
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;