import sellerConstants from "./actionTypes"

const sellerInit = {
    isLoading: false,
    isError: false,
    error: null,
    isSuccess: false,
}

const sellerReducer = ( state= sellerInit, action ) => {
    switch( action.type ){
        case sellerConstants.ADD_PRODUCT_REQUEST:{
            return {
                ...state,
                ...action.payload
            }
        }
        case sellerConstants.ADD_PRODUCT_SUCCESS:{
            return {
                ...state,
                ...action.payload
            }
        }
        case sellerConstants.ADD_PRODUCT_FAILURE:{
            return {
                ...state,
                ...action.payload
            }
        }
        case sellerConstants.SET_DEFAULT: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default sellerReducer;