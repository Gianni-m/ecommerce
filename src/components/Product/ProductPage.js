import "./ProductPage.scss";
import logo from '../../assets/images/vet_03.jpg'
import React, {useEffect, useState, Fragment} from "react";
import {useDispatch} from "react-redux";
import {getProductById} from "../../actions/productActions";
import {addProductToCart} from "../../actions/cartActions";


const productExample = {
    "id": 1,
    "color": "red",
    "price": 12,
    "name": "t-shirt rouge incroyable insane du cul",
    "description": "Ce t-shirt est INCROYABLE ACHETE LE ",
    "createdBy": {
        "id": 1,
        "username": "pulgan",
        "email": "pulgan18@gmail.com",
        "firstName": "Romain",
        "lastName": "Blanquet",
        "password": "cookie",
        "createdAt": 1620825626599,
        "phoneNumber": null,
        "isAdmin": false,
        "isSealer": false
    },
    "sizes": [
        {
            "id": 1,
            "sizeName": "M",
            "quantity": 10
        }
    ]
}



const ProductPage =(props) => {
    const [product, setProduct] = useState(null);
    const {productId} = props.match.params;
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        loadProduct(productId)
    }, []);

    function handleInputChange(e) {
        if(e.target.value && e.target.value > 0) {
            setQuantity(e.target.value)
        }
    }
    function addToCart() {
        dispatch(addProductToCart(productId, quantity))
    }

    async function loadProduct(productId) {
        const productData = await dispatch(getProductById(productId))
            .then((product) => {
                if(product) {
                    console.log("PRODUIT TROUVE");
                    setProduct(product)
                } else {
                    console.log("PRODUIT INTROUVABLE");

                    setProduct(productExample);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log("ERREUR DE REQUÊTE");

                setProduct(productExample);
            })

    }

    return (
        <Fragment>
            {
                product
                    ?

                    <div className="productpage">
                            <div className="left-image">
                                <img src={logo} alt="product name"/>
                            </div>


                        <div className="prems">
                            <div className="left-info">
                                <p className="left-name">{product.name}</p>
                                <p> Price : {product.price} € </p>
                                <p> {product.description} </p>
                                <p>
                                    <h2> Coloris au choix : </h2>
                                    <button className="coloris" style={{background:product.color}}> </button>
                                </p>
                            </div>
                                <div className="left-info">
                                    <p> Status : <span> In Stock</span></p>
                                        <p> Qty :
                                            <input className="quantity" type="number" step="1"
                                                   defaultValue={1}
                                                   onChange={handleInputChange}
                                            />
                                        </p>
                                <div className="add-product">
                                    <button type="button" onClick={() => addToCart()}> Add to cart</button>
                                </div>
                                </div>

                        </div>


                        </div>

                    : <p>LOADING</p>
            }
        </Fragment>
    )
}

export default ProductPage;
