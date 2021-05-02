import "../../style/Cart.scss"
import React, { Fragment} from 'react';
import CartItem from "../../components/CartItem"
import Navbar from "../Navbar/Navbar";

const Cart = () => {
    return (

        <Fragment>
        <Navbar/>
        <div className="cart">
        <div className="cart-left">
        <h2>Shopping Cart </h2>

        <CartItem/>
        </div>
        <div className="cart-right">
            <div className="cart-info">
                <p> Subtotal (0) items</p>
                <p> 10.99 €</p>
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