import "./ProductPage.scss";
import logo from '../../assets/images/vet_03.jpg'
import React, {useEffect, useState, Fragment} from "react";
import {useDispatch} from "react-redux";
import {getProductById} from "../../actions/productActions";
import {addProductToCart} from "../../actions/cartActions";


const ProductPage =(props) => {
    const {productId} = props.match.params;

    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(productId, {expansions: 'sizes'}))
            .then((product) => {
                if(product) {
                    console.log(product)
                    setProduct(product)
                    if(product.sizes.length > 0) {
                        setSelectedSize(product.sizes.shift())
                    }
                } else {
                    props.history.push('/')

                }
            })
            .catch((err) => {
                console.log(err)
                props.history.push('/')
            })

    }, []);

    function handleInputChange(e) {
        if(e.target.value && e.target.value > 0) {
            setQuantity(e.target.value)
        }
    }
    function addToCart() {
        if(selectedSize) {
            dispatch(addProductToCart(selectedSize.id, quantity))
        } else {
            console.log("aucune taille selectionné")
        }
    }

    function isAvailable() {
        return selectedSize && selectedSize.quantity > 0
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
                                <p> Prix : {product.price} € </p>
                                <p> {product.description} </p>
                                <div className='size-selector'>
                                    <h3> Tailles disponibles : </h3>
                                    {
                                        (product.sizes)
                                        ? product.sizes.map((size) => {
                                            console.log(size);
                                                return <button
                                                    onClick={() => setSelectedSize(size)}
                                                    key={size.id}
                                                >
                                                    {size.sizeName}
                                                </button>
                                            })
                                            : <p>Aucune taille disponible pour le moment...</p>
                                    }
                                </div>
                            </div>
                                <div className="left-info">
                                        <p>{isAvailable() ? "En stock" : "Actuellement indisponible"}</p>
                                        <p> Qty :
                                            <input className="quantity" type="number" step="1"
                                                   defaultValue={1}
                                                   onChange={handleInputChange}
                                            />
                                        </p>
                                <div className="add-product">
                                    <button type="button" disabled={!isAvailable()} onClick={() => addToCart()}> Add to cart</button>
                                </div>
                                </div>

                        </div>


                        </div>

                    : <p>LOADING</p>
            }
        </Fragment>
    )
};

export default ProductPage;
