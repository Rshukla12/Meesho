import { loadData, saveData } from "../../utils/localStorage";
import cartConstants from "./actionTypes";

const cart =  loadData("Cart");
const address =  loadData("Address") || [];
const orders = loadData("Orders") || [];

const initCart = {
    stage: 1,
    address: address,
    cart: cart || [
        {
            "id": 1,
            "category": "Sarees",
            "title": "WETLESS RAINBOW ZARI WITH DIGITAL PRINT SATIN BLOUSE",
            "original_price" : 416,
            "discounted_price": 316,
            "sizes": [
                "Free Size"
            ],
            "imgs": [
                "https://images.meesho.com/images/products/71034092/roaia_64.jpg",
                "https://images.meesho.com/images/products/71034092/jjcxa_64.jpg",
                "https://images.meesho.com/images/products/71034092/1upja_64.jpg",
                "https://images.meesho.com/images/products/71034092/aghvl_64.jpg"
            ],
            "details": {
                "Saree Fabric" : "Georgette",
                "Blouse" : "Separate Blouse Piece",
                "Blouse Fabric" : "Satin",
                "Pattern" : "Woven Design",
                "Blouse Pattern" : "Foil Printed",
                "Multipack" : "Single",
                "Sizes" : "Free Size (Saree Length Size : 5.5 m, Blouse Length Size: 0.8 m)"
            },
            "rating": 3.9,
            "seller_id": 1,
            "qty": 1
        },
        {
            "id": 27,
            "category": "Jewellery",
            "title": "TRADTIONAL JWELLERY WITH AMAZING FREE GIFT OFFER",
            "original_price" : 924,
            "discounted_price": 774,
            "sizes": [
                "Free Size"
            ],
            "imgs": [
                "https://images.meesho.com/images/products/71018901/t1fbp_512.jpg"
            ],
            "details": {
                "Base Metal" : "Brass",
                "Plating" : "Gold Plating",
                "Stone Type" : "American Bead",
                "Sizing" : "Adjustable",
                "Multipack" : 1
            },
            "rating": 4.2,
            "seller_id": 7,
            "qty": 2
        }
    ],
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
            return {
                ...state,
                cart: [...state.cart , { ...action.payload.product, qty: 1 } ]
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
            saveData("Orders", state.orders);
            return {
                ...state,
                stage: action.payload.stage
            }
        }
        case cartConstants.ORDER_SUCCESSFUL: {
            return {
                ...state,
                stage: 1,
                cart: [],
                orders: [...state.orders, {items: state.cart, date: Date.now(), resell: state.isResell, margin: state.margin } ]
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