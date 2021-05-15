import React, {Component, Fragment} from 'react';

import Product from "./Product"
import {connect} from "react-redux";
import {connectUser} from "../../actions/authActions";
import MomentProduct from "../../MomentProduct";
import "./Home.scss"



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'blue',
        }
    }

    render() {

        console.log(this.props)
        return (
            <Fragment>

                <div className="home">
                    <h2 className="hometitle"> Latest Products</h2>
                    <div className="home-products" >
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>

                    </div>
                    <h2 className="article-moment"> Article du moment</h2>
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
export default connect(mapStateToProps, {connectUser})(Home);