import React, {Component, Fragment} from 'react';
import '../../App.css';
//import Cards from '../Cards';
import Navbar from "../Navbar/Navbar";
import Product from "../Product"
import {connect} from "react-redux";
import {connectUser} from "../../actions/authActions";


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
                <Navbar/>
                <div className="home">
                    <button
                        onClick={() => this.props.connectUser()}
                    >CLICK ME</button>
                    <h2 className="hometitle"> Latest Products</h2>
                    <div style={{color: 'blue'}}>
                        {
                            this.props.auth.isAuthenticated
                                ? "je suis connecté"
                                : "je ne suis pas connecté"
                        }
                    </div>
                    <div className="home-products">
                        <Product/>
                        <Product/>
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