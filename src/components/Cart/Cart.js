import "./Cart.scss"
import React, {Fragment, useEffect, useState} from 'react';
import CartItem from "./CartItem"
import {useDispatch, useSelector} from "react-redux";
import {getProductsByIds} from "../../actions/productActions";
import {getUserAddress} from "../../actions/userAddressActions";
import {createCommands} from "../../actions/commandActions";


const Cart = (props) => {
    const dispatch = useDispatch();
    const cartStore = useSelector(state => state.cart);
    const authStore = useSelector(state => state.auth);
    const cartProducts = cartStore.products

    const [products, setProducts] = useState([]);
    const [addressList, setAddressList] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(undefined)
    const [error, setError] = useState('');
    const totalStats = getTotalStats(products, cartProducts)

    useEffect(() => {
            dispatch(getProductsByIds(getProductsIds(cartProducts)))
                .then((productData) => setProducts(productData))
                .catch(err => console.log(err))
        dispatch(getUserAddress())
            .then((address) => {
                setAddressList(address)
                if(addressList.length > 0) {
                    setSelectedAddress(addressList.shift().id)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function manageCommandCreation() {
        setError('')
        console.log(selectedAddress)
        if(cartProducts.length === 0)
            setError('veuillez ajouter des produits')
        else if(!selectedAddress) {
            setError('addresse invalide');
        } else {
            console.log("ici")
            dispatch(createCommands(cartProducts, selectedAddress))
                .then(() => props.history.push('/profile/commands'))
        }
    }

    return (

        <Fragment>

        <div className="cart">
        <div className="cart-left">
        <h2>Panier </h2>
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
                <h3>Résumé :</h3>
                <div className='price-display'>
                    <p>Nombre d'articles :</p>
                    <p className='price-value'>{totalStats.productCount}</p>
                </div>

                <div className='price-display'>
                    <p>Prix total :</p>
                    <p className='price-value'>{totalStats.totalPrice} €</p>
                </div>
            </div>
            <div className='address'>
                <h3>Adresse de livraison :</h3>
                <select disabled={!authStore.isAuthenticated} onChange={(e) => setSelectedAddress(e.target.value)}>
                    {
                        addressList.map((address) => {
                            return <option value={address.id}>{address.address}, {address.city}</option>
                        })
                    }
                </select>

                {
                    addressList.length === 0 && authStore.isAuthenticated? <div className='no-address-error'>
                        <p className='no-address-error'>Il semblerait que aucune addresse ne soit enregistrée.</p>
                        <a href='/profile/infos'>ajouter une adresse</a>
                    </div> : null
                }
            </div>
            <div className='payment'>
                <h3>Moyen de payement :</h3>
                <select disabled={true} onChange={(e) => setSelectedAddress(e.target.value)}>
                    <option>automatique </option>
                </select>
            </div>
            <div>
                <p>{error}</p>
            </div>
            <div>
                <button
                    onClick={() => {
                        authStore.isAuthenticated
                            ? manageCommandCreation()
                            : props.history.push('/login')
                    }}
                > {authStore.isAuthenticated ? "Procéder au payement" : "Se connecter pour continuer"}</button>
            </div>

        </div>
    </div>
        </Fragment>
    );

}

export default Cart;

const getTotalStats = (products = [], cartProducts = []) => {
    let productCount = 0;
    let totalPrice = 0;
    for(let i = 0; i < products.length ; i++) {
        const product = products[i];
        const quantity = getProductQuantity(cartProducts, product.id)
        productCount+= quantity;
        totalPrice+= (quantity * product.product.price);
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