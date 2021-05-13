import "./ProductPage.scss";
import logo from '../../assets/images/vet_03.jpg'
import React, {useEffect, useState, Fragment} from "react";
import {useDispatch} from "react-redux";
import {getProduct} from "../../actions/productActions";
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
    const [product, setProduct] = useState();
    const {productId} = props.match.params;

    const dispatch = useDispatch();
    useEffect(() => {
        loadProduct(productId)
    }, []);

    async function loadProduct(productId) {
        const productData = await dispatch(getProduct(productId))
            .then((product) => {
                if(productData) {
                    console.log("PRODUIT TROUVE");
                    setProduct(productData)
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
                        <div className="productpage-left">
                                <img src={logo} alt="product name"/>
                            <div className="left-info">
                                <p className="left-name">{product.name}</p>
                                <p> <h3>Price :  {product.price} €  </h3> </p>
                                <p> {product.description} </p>
                                <p>
                                    <h2> Coloris possible :</h2>
                                  <button className="test" style={{background:product.color}}> </button>
                             </p>
                            </div>

                            </div>
                        <div className="productpage-right">
                            <div className="right-info">
                                <p> Status : <span> In Stock</span></p>
                                <p> Qty :
                                   <input className="quantity" type="number" step="1"
                                   defaultValue={1}/>
                                </p>
                                <p>
                                    <button type="button" onClick={() => dispatch(addProductToCart(product.id, 1))}> Add to cart</button>
                                </p>
                            </div>
                        </div>



                    </div>
                    : <p>LOADING</p>
            }
        </Fragment>
    )
}

export default ProductPage;
