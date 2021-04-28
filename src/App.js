
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Cards from './components/Cards';
import Home from "./components/pages/Home";

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='*' >
            <Redirect to='/home'/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
