/*import {
    ADD_PRODUCT_TO_CART,
    CLEAR_CART,
    REMOVE_PRODUCT_FROM_CART,
} from "../actions/types";

const initialState = {
    products: []
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: return {
            ...state,
            products: addProductToCart(state.products, action.payload.product, action.payload.quantity)
        }
        case REMOVE_PRODUCT_FROM_CART: return {
            ...state,
            products: removeProductFromCart(state.products, action.payload.productId, action.payload.quantity)
        }
        case CLEAR_CART: return initialState
        default:
            return state;
    }
}


const getProductIndex = (products, productId) => {
    for(let i = 0 ; i < products.length ; i++) {
        if(products[i].id === productId) return i;
    }
    return null;
}*/
/*
const removeProductFromCart = (products, productId, quantity) => {
    const index = getProductIndex(products, productId);
    if(index) {
        products[index].quantity -= quantity;
        if(products[index].quantity <= 0) {
            products.splice(index, 1);
        }
    }
    return products;
}

const addProductToCart = (products, product, quantity) => {
    //TODO check for product conflict
    const index = getProductIndex(products, product.id);
    if(index) {
        products[index].quantity += quantity;
    } else {
        products.push({
            ...product,
            quantity: quantity
        })
    }
    return products;
}*/