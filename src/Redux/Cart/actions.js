import cartConstants from "./actionTypes";

export const addAddress = ( add ) => ({
    type: cartConstants.ADD_ADDRESS,
    payload: {
        address: add
    }
});

export const addToCart = ( item ) => ({
    type: cartConstants.ADD_TO_CART,
    payload: {
        product: item
    }
});

export const changeQty = ( id, qty ) => ({
    type: cartConstants.CHANGE_QTY,
    payload: {
        id: id,
        qty: qty
    }
});

export const removeFromCart = ( id ) => ({
    type: cartConstants.REMOVE_FROM_CART,
    payload: {
        id: id
    }
});

export const changeCheckoutStage = ( stage ) => ({
    type: cartConstants.CHANGE_CHECKOUT_STAGE,
    payload: {
        stage
    }
});


export const orderSuccessful = ( ) => ({
    type: cartConstants.ORDER_SUCCESSFUL,
    payload: {
        success: true
    }
});

export const addMargin = ( margin ) => ({
    type: cartConstants.ADD_MARGIN,
    payload: {
        margin: Number.isNaN(Number(margin)) ? 0 : Number(margin)
    }
})