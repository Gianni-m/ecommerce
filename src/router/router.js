import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/Home/Home";
import RegisterForm from "../components/Auth/RegisterForm"
import LoginForm from "../components/Auth/LoginForm";
import ProductPage from "../components/Product/ProductPage"
import Cart from "../components/Cart/Cart"
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/productManagement/Dashboard";
import Footer from "../components/Footer/Footer";
import DashboardSidebar from "../components/productManagement/DashboardSidebar";
import StockDashboard from "../components/productManagement/stockDashboard/StockDashboard";

import StockManagement from "../components/productManagement/stockDashboard/stockManagement/StockManagement";
import LogoutForm from "../components/Auth/LogoutForm";

import Profile from "../components/Profile/Profile";
import Commandes from "../components/Profile/Commandes";
import Infos from "../components/Profile/Infos";
import Payment from "../components/Payment/Payment";
import DisplayCategories from "../components/Categories/DisplayCategories";
import PrivateRoute from "./PrivateRoute";
import {useSelector} from "react-redux";


function RouterList() {

    const authStore = useSelector(state => state.auth);


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
                        <Route path='/logout' component={LogoutForm} />
                        <Route path='/cart' component={Cart}/>
                        <Route path='/product/:productId/' component={ProductPage}/>
                        <PrivateRoute path='/profil' component={Profile}/>
                        <PrivateRoute path='/profil/commandes' component={Commandes}/>
                        <PrivateRoute path='/profil/infos' component={Infos}/>
                        <PrivateRoute path='/payment' component={Payment}/>
                        <Route path='/category/:categoryId' component={DisplayCategories}/>




                        <PrivateRoute authed={authStore.isAuthenticated} path='/dashboard/'>
                            <DashboardSidebar/>
                            <Switch>
                                <PrivateRoute exact path='/dashboard/'>
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute exact path='/dashboard/stock'>
                                    <StockDashboard/>
                                </PrivateRoute>
                                <PrivateRoute exact path='/dashboard/stockManagement'>
                                    <StockManagement/>
                                </PrivateRoute>
                                <PrivateRoute>
                                    <Redirect to='/dashboard'/>
                                </PrivateRoute>

                            </Switch>
                        </PrivateRoute>
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

export default RouterList
