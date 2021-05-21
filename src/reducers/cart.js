import {
    ADD_PRODUCT_TO_CART,
    CLEAR_CART,
    REMOVE_PRODUCT_FROM_CART, UPDATE_CART_PRODUCT_QUANTITY,
} from "../actions/types";

const initialState = {
    products: []
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: return {
            ...state,
            products: addProductToCart(state.products, action.payload.productId, action.payload.quantity)
        }
        case REMOVE_PRODUCT_FROM_CART: return {
            ...state,
            products: removeProductFromCart(state.products, action.payload.productId, action.payload.quantity)
        }
        case CLEAR_CART: return initialState
        case UPDATE_CART_PRODUCT_QUANTITY: return {
            ...state,
            products: updateProductQuantity(state.products, action.payload.productId, action.payload.quantity)
        }
        default:
            return state;
    }
}


const getProductIndex = (products, productId) => {
    for(let i = 0 ; i < products.length ; i++) {
        if(products[i].id === productId) return i;
    }
    return null;
}

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

const addProductToCart = (products, productId, quantity) => {

    //TODO check for product conflict
    const index = getProductIndex(products, productId);
    console.log(index)
    if(index != null) {
        products[index].quantity += quantity;
    } else {
        products.push({
            productId: productId,
            quantity: quantity
        })
    }
    return products;
}

const updateProductQuantity = (products, productId, quantity) => {
    const index = getProductIndex(products, productId)
    if(index != null) {
        products[index].quantity = quantity
    }
    return products;
}