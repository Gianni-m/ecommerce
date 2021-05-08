import {ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT_FROM_CART} from "./types";

export const addProductToCart = (product, quantity) => (dispatch) => {
    try {
        //TODO: add request
        dispatch(addProductDispatch(product, quantity));
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

export const clearCart = () => (dispatch) => {
    try {
        // TODO: add request
        dispatch(clearCartDispatch());
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const addProductDispatch = (product, quantity) => {
    return {
        payload: {
            products: product,
            quantity: quantity
        },
        action: ADD_PRODUCT_TO_CART
    }
}

const removeProductDispatch = (productId, quantity) => {
    return {
        payload: {
            productId: productId,
            quantity: quantity
        },
        action: REMOVE_PRODUCT_FROM_CART
    }
}

const clearCartDispatch = () => {
    return {
        payload: {},
        action: CLEAR_CART
    }
}