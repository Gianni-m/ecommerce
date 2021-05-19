import React, {Component, Fragment} from 'react';

import Product from "./Product"
import {connect} from "react-redux";
import MomentProduct from "./MomentProduct";
import "./Home.scss"



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
        }
    }

    render() {

        return (
            <Fragment>

                <div className="home">
                    <h3 className="hometitle"> Latest Products</h3>
                    <div className="home-products" >
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
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
}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {})(Home);