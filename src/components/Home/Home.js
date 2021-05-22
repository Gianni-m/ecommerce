import React, {Component, Fragment, useEffect, useState} from 'react';

import Product from "./Product"
import {connect, useDispatch} from "react-redux";
import MomentProduct from "./MomentProduct";
import "./Home.scss"
import {getProducts} from "../../actions/productActions";
import ProductCategories from "../Categories/ProductCategories";



const Home = (props) => {

    const [products, setProduct] = useState([]);
    const dispatch = useDispatch();

    const {categoryId} = props.match.params

    useEffect(() => {
        displayProduct()
    }, []);

    async function displayProduct() {
        await dispatch(getProducts(categoryId))
            .then((product) => {
                if(product) {
                    setProduct(product.concat(product))
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
                    <div className="latest-product">
                        <MomentProduct/>
                        <MomentProduct/>
                    </div>
                </div>
            </Fragment>
        );

}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {})(Home);
