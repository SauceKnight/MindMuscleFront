import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './index.css';
import App from './App';


let store;

if (localStorage.getItem("id") && localStorage.getItem("username")) {
  let user = {};
  user["id"] = localStorage.getItem("id");
  user["username"] = localStorage.getItem("username");
  const preState = { User: user }
  store = configureStore(preState)
}
else {
  store = configureStore();
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
