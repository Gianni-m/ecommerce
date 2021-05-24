import React, {Fragment, useEffect, useState} from 'react';
import casquetteIcon from "../../assets/images/casquette.jpg";
import tshirtIcon from "../../assets/images/product1.jpg";

import Product from "./Product"
import {connect, useDispatch} from "react-redux";
import MomentProduct from "./MomentProduct";
import "./Home.scss"
import {getProducts} from "../../actions/productActions";



const Home = () => {

    const [cartProduct, setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() =>{
        function onload() {
            displayProduct()
        }
        onload()
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
                <div className="latest-product">
                    <MomentProduct
                        logo={casquetteIcon}
                        name='casquette noir'
                        price={12}
                        description="une casquette standard qui protège du soleil."
                    />
                    <MomentProduct
                        logo={tshirtIcon}
                        name='tshirt gris été'
                        description="un tshirt pour l'été de haute qualité."
                        price={15}
                    />
                </div>
                <div className="home-cartProduct" >
                    {
                        cartProduct.length > 0 ?
                            cartProduct.map((product) => {
                                return <Product
                                    key={product.id}
                                    {...product}
                                    icon={tshirtIcon}
                                />
                            })
                            : <p>Aucun article pour cette catégorie</p>
                    }
                </div>
            </div>
        </Fragment>
    );

}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {})(Home);
