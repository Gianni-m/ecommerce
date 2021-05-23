import "./Cart.scss"
import React, {Fragment, useEffect, useState} from 'react';
import CartItem from "./CartItem"
import {useDispatch, useSelector} from "react-redux";
import {getProductsByIds} from "../../actions/productActions";


const Cart = () => {
    const dispatch = useDispatch();
    const cartStore = useSelector(state => state.cart);
    const cartProducts = cartStore.products

    const [products, setProducts] = useState([]);
    const totalStats = getTotalStats(products, cartProducts)

    useEffect(() => {
            dispatch(getProductsByIds(getProductsIds(cartProducts)))
                .then((productData) => {
                    console.log(productData)
                    setProducts(productData);

                    console.log("I SET THE DATAS")
                    console.log(products)
                })
                .catch(err => {
                    console.log(err);
                })
    }, [])
    return (

        <Fragment>

        <div className="cart">
        <div className="cart-left">
        <h2>Shopping Cart </h2>
            {
                products.length > 0
                    ? products.map((product) => {
                        return <CartItem
                            {...product}
                            quantity={getProductQuantity(cartProducts, product.id)}
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

const getTotalStats = (products, cartProducts = []) => {
    let productCount = 0;
    let totalPrice = 0;
    for(let i = 0; i < cartProducts.length ; i++) {
        const product = products[i];
        const quantity = getProductQuantity(cartProducts, product.id)
        productCount+= quantity;
        totalPrice+= (quantity * product.price);
    }
    return {
        productCount,
        totalPrice
    }
}

const getProductsIds = (products) => {
    return products.map(product => product.id)
}

const getProductQuantity = (products, productId) => {
    for(let i = 0; i < products.length ; i++) {
        const product = products[i];
        if(parseInt(product.id) === productId) {
            return products[i].quantity;
        }
    }
    return null;
}