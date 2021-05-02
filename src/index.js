import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rooReducer from "./reducers";
import {createStore} from "redux";
import middleware from "./middlewares"
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {loginDispatch} from "./actions/authActions";
const store = createStore(rooReducer, composeWithDevTools(middleware))

if(localStorage.jwtToken) {
    const localToken = localStorage.jwtToken;
    const data = JSON.parse(localToken);
    store.dispatch(loginDispatch(data))}

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
