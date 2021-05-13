import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home";
import RegisterForm from "../components/Auth/RegisterForm"
import LoginForm from "../components/Auth/LoginForm";
import ProductPage from "../components/pages/ProductPage"
import Cart from "../components/pages/Cart"
import Navbar from "../components/Navbar/Navbar";
import ProductDisplay from '../components/Product/ProductDisplay';
import Dashboard from "../components/productManagement/Dashboard";
import Footer from "../components/Footer";
class RouterList extends Component {
    render() {
        return (
            <Router>
                <div className="app-header">
                    <Navbar/>
                </div>
                <div className="app-body">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/register' component={RegisterForm} />
                        {<Route path='/cart' component={Cart}/>}
                        <Route path='/product/:productId/' component={ProductPage}/>

                        <Route path='/dashboard'>
                            <Dashboard/>
                        </Route>
                        <Route path="*">
                            <Redirect to='/'/>
                        </Route>
                    </Switch>
                </div>
                <div className="app-footer">
                    <Footer/>
                </div>

            </Router>
        )
    }
}

export default RouterList