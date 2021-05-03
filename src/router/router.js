import {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home";
import RegisterForm from "../components/Auth/RegisterForm"
import LoginForm from "../components/Auth/LoginForm";
import ProductPage from "../components/pages/ProductPage"
import Cart from "../components/pages/Cart"

class RouterList extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/productest' component={ProductPage}/>
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/register' component={RegisterForm} />
                    {<Route path='/cart' component={Cart}/>}
                    <Route path="*">
                        <Redirect to='/'/>
                    </Route>
                </Switch>



            </Router>
        )
    }
}

export default RouterList