import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/Home/Home";
import RegisterForm from "../components/Auth/RegisterForm"
import LoginForm from "../components/Auth/LoginForm";
import ProductPage from "../components/Product/ProductPage"
import Cart from "../components/Cart/Cart"
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/productManagement/Dashboard";
import Footer from "../components/Footer/Footer";
import DashboardSidebar from "../components/productManagement/Sidebar/DashboardSidebar";
import ProductDashboard from "../components/productManagement/myProducts/ProductDashboard";

import StockManagement from "../components/productManagement/stockDashboard/stockManagement/StockManagement";
import LogoutForm from "../components/Auth/LogoutForm";

import Profile from "../components/Profile/Profile";
import Commandes from "../components/Profile/Commandes";
import Infos from "../components/Profile/Infos";
import Payment from "../components/Payment/Payment";
import DisplayCategories from "../components/Categories/DisplayCategories";
import PrivateRoute from "./PrivateRoute";
import {useSelector} from "react-redux";
import ProfileSidebar from "../components/Profile/ProfileSideBar";
import SellerCommands from "../components/productManagement/Commands/Commandes";
import ToggleAdmin from "../components/Auth/toggleAdmin";


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
                        <PrivateRoute authed={authStore.isAuthenticated} exact path='/toggleAdmin' component={ToggleAdmin}/>
                        <Route path='/category/:categoryId' component={DisplayCategories}/>
                        <PrivateRoute authed={authStore.isAuthenticated} exact path='/payment' component={Payment}/>

                        <PrivateRoute path='/profile' authed={authStore.isAuthenticated}>
                            <ProfileSidebar/>
                            <Switch>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/profile' component={Profile}/>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/profile/commands' component={Commandes}/>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/profile/infos' component={Infos}/>
                                <Redirect to='/profile'/>
                            </Switch>
                        </PrivateRoute>



                        <PrivateRoute authed={authStore.isAuthenticated} path='/dashboard/'>
                            <DashboardSidebar user={authStore.user}/>
                            <Switch>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/dashboard/'>
                                    <Dashboard/>
                                </PrivateRoute>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/dashboard/stock'>
                                    <ProductDashboard/>
                                </PrivateRoute>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/dashboard/stockManagement'>
                                    <StockManagement/>
                                </PrivateRoute>
                                <PrivateRoute authed={authStore.isAuthenticated} exact path='/dashboard/commands'>
                                    <SellerCommands/>
                                </PrivateRoute>
                                <Route>
                                    <Redirect to='/dashboard'/>
                                </Route>

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
