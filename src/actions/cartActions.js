import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_CART_PRODUCT_QUANTITY} from "./types";

export const addProductToCart = (productId, quantity) => (dispatch) => {
    try {
        //TODO: add request
        const payload = addProductDispatch(productId, quantity);
        console.log(payload)
        dispatch(payload)

    } catch(err) {
        console.log(err);
        throw err
    }
}

export const removeProductFromCart = (productId, quantity) => (dispatch) => {
    try {
        //TODO: add request
        dispatch(removeProductDispatch(productId, quantity))
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export const updateProductQuantity = (productId, quantity) => dispatch => {
    try {
        dispatch(updateProductQuantityDispatch(productId, quantity))
    } catch(err) {
        throw err;
    }
}


export const clearCart = () => (dispatch) => {
    try {
        // TODO: add request
        dispatch(clearCartDispatch());
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const updateProductQuantityDispatch = (productId, quantity) => {
    return {
        payload: {
            productId,
            quantity
        },
        type: UPDATE_CART_PRODUCT_QUANTITY
    }
}

const addProductDispatch = (productId, quantity) => {
    return {
        payload: {
            productId: productId,
            quantity: quantity
        },
        type: ADD_PRODUCT_TO_CART
    }
}

const removeProductDispatch = (productId, quantity) => {
    return {
        payload: {
            productId: productId,
            quantity: quantity
        },
        type: REMOVE_PRODUCT_FROM_CART
    }
}

const clearCartDispatch = () => {
    return {
        payload: {},
        type: CLEAR_CART
    }
}