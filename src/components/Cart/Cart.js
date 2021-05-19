import "./Cart.scss"
import React, { Fragment} from 'react';
import CartItem from "./CartItem"
import {useSelector} from "react-redux";


const Cart = () => {
    const cartStore = useSelector(state => state.cart);
    const products = cartStore.products

    const totalStats = getTotalStats(products)
    return (

        <Fragment>

        <div className="cart">
        <div className="cart-left">
        <h2>Shopping Cart </h2>
            {
                products.length > 0
                    ? cartStore.products.map((product) => {
                        return <CartItem
                            {...product}
                            key={product.id}
                        />
                    })
                    : <p>Votre panier est vide.</p>
            }
        </div>
        <div className="cart-right">
            <div className="cart-info">
                <p> Subtotal ({totalStats.productCount}) items</p>
                <p> {totalStats.totalPrice} €</p>
            </div>
            <div>
                <button> Proceed to Checkout</button>
            </div>

        </div>
    </div>
        </Fragment>
    );

}

export default Cart;

const getTotalStats = (products = []) => {
    let productCount = 0;
    let totalPrice = 0;
    for(let i = 0; i < products.length ; i++) {
        const product = products[i];
        productCount+= product.quantity;
        totalPrice+= (product.quantity * product.price);
    }
    return {
        productCount,
        totalPrice
    }
}