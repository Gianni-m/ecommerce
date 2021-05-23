import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

import rooReducer from "./reducers";
import {createStore} from "redux";
import middleware from "./middlewares"
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {loginDispatch} from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCartDispatch} from "./actions/cartActions";

const store = createStore(rooReducer, composeWithDevTools(middleware))

if(localStorage.jwtToken) {
    const localToken = localStorage.jwtToken;
    const decoded = jwt_decode(localToken);
    setAuthToken(localToken)
    store.dispatch(loginDispatch(decoded))
}
if(localStorage.cart) {
    const localCart = localStorage.cart;
    try {
        const products = JSON.parse(localCart);
        store.dispatch(setCartDispatch(products))
    } catch(err) {
        console.log(err)
    }
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();