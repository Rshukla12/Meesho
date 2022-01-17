import { loadData, saveData } from "../../utils/localStorage";
import cartConstants from "./actionTypes";

const cart =  loadData("Cart");
const address =  loadData("Address") || [];
const orders = loadData("Orders") || [];

const initCart = {
    stage: 1,
    address: address,
    cart: cart || [],
    orders: orders,
    currentOrder: {},
    margin: 0
};

const cartReducer = ( state=initCart, action ) => {
    switch ( action.type ){
        case cartConstants.ADD_ADDRESS: {
            return {
                ...state,
                address: [...state.address, action.payload.address ]
            }
        }
        case cartConstants.ADD_TO_CART: {
            let newItem = true;
            let newCart = state.cart.map(el => {
                if ( el.id === action.payload.product.id ) {
                    newItem = false;
                    return { ...el, qty: el.qty+1 };
                }
                return el;
            });
            if ( newItem ) newCart = [...state.cart , { ...action.payload.product, qty: 1 } ]
            saveData("Cart", newCart);
            return {
                ...state,
                cart: newCart
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
            saveData("Address", state.address);
            saveData("Cart", state.cart);
            return {
                ...state,
                stage: action.payload.stage
            }
        }
        case cartConstants.ORDER_SUCCESSFUL: {
            saveData("Cart", []);
            const orders = [...state.orders, {items: state.cart, date: Date.now(), resell: state.isResell, margin: state.margin } ];
            saveData("Orders", orders);
            return {
                ...state,
                stage: 1,
                cart: [],
                orders: orders
            }
        }
        case cartConstants.ADD_MARGIN: {
            return {
                ...state,
                margin: action.payload.margin,
            }
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;