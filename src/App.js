
import './App.css';


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Form from "./components/Form"
import LoginForm from "./components/LoginForm";
import ProductPage from "./components/pages/ProductPage"

function App() {
  return (

      <Router>
        <Switch>
            <Route path='/productest' component={ProductPage}/>
            <Route path='/login' component={LoginForm}/>
            <Route path='/register' component={Form} />
            <Route path='/' component={Home} />


        </Switch>



      </Router>

  );
}

export default App;
