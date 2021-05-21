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
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileCommands from "../components/Profile/Commandes";
import ProfileInfos from "../components/Profile/Infos";

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
                        <Route path='/logout' component={LogoutForm} />
                        {<Route path='/cart' component={Cart}/>}
                        <Route path='/product/:productId/' component={ProductPage}/>
                        <Route path='/profil' component={Profile}/>
                        <Route path='/profil/commandes' component={Commandes}/>
                        <Route path='/profil/infos' component={Infos}/>
                        <Route path='/payment' component={Payment}/>



                        <Route path='/dashboard/'>
                            <DashboardSidebar/>
                            <Switch>
                                <Route exact path='/dashboard/'>
                                    <Dashboard/>
                                </Route>
                                <Route exact path='/dashboard/stock'>
                                    <StockDashboard/>
                                </Route>
                                <Route exact path='/dashboard/stockManagement'>
                                    <StockManagement/>
                                </Route>
                                <Route>
                                    <Redirect to='/dashboard'/>
                                </Route>

                            </Switch>
                        </Route>
                        <Route path='/profile/'>
                            <ProfileSidebar/>
                            <Switch>
                                <Route exact path='/profile'>
                                    <Profile/>
                                </Route>
                                <Route exact path='/profile/infos'>
                                    <ProfileInfos/>
                                </Route>
                                <Route exact path='/profile/commands'>
                                    <ProfileCommands/>
                                </Route>
                                <Route>
                                    <Redirect to='/profile'/>
                                </Route>

                            </Switch>
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
