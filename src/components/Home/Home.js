import React, {Fragment, useEffect, useState} from 'react';

import Product from "./Product"
import {connect, useDispatch} from "react-redux";
import MomentProduct from "./MomentProduct";
import "./Home.scss"
import {getProducts} from "../../actions/productActions";



const Home = () => {

    const [products, setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        displayProduct()
    }, []);

    async function displayProduct() {
        await dispatch(getProducts({take: 20}))
            .then((product) => {
                if(product) {
                    setProduct(product)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Fragment>

            <div className="home">
                <h3 className="hometitle"> Latest Products</h3>
                <div className="latest-product">
                    <MomentProduct/>
                    <MomentProduct/>
                </div>
                <div className="home-products" >
                    {
                        products.length > 0 ?
                            products.map((product) => {
                                return <Product
                                    key={product.id}
                                    {...product}
                                />
                            })
                            : <p>Aucun article pour cette catégorie</p>
                    }
                </div>
                <h3 className="article-moment"> Article du moment</h3>
            </div>
        </Fragment>
    );

}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {})(Home);
