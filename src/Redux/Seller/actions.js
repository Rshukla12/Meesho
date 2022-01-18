import axios from "axios";
import sellerConstants from "./actionTypes";

export const setDefault = () => ({
    type: sellerConstants.SET_DEFAULT,
    payload: {
        isLoading: false,
        isError: false,
        error: null,
        isSuccess: false
    }
});

export const addProductRequest = () => ({
    type: sellerConstants.ADD_PRODUCT_REQUEST,
    payload: {
        isLoading: true,
        isError: false,
        error: null
    }
});

export const addProductSuccess = () => ({
    type: sellerConstants.ADD_PRODUCT_SUCCESS,
    payload: {
        isLoading: false,
        isError: false,
        isSuccess: true,
        error: null
    }
});

export const addProductFailure = ( err ) => ({
    type: sellerConstants.ADD_PRODUCT_FAILURE,
    payload: {
        isLoading: false,
        isError: true,
        error: err,
        isSuccess: false
    }
});

export const addProduct = ( product ) => ( dispatch ) => {
    dispatch( addProductRequest );
    axios.post("https://fake-rjson-server-pro.herokuapp.com/products", product)
    .then( res => {
        dispatch(addProductSuccess());
    })
    .catch( err => {
        dispatch(addProductFailure(err));
    });
};