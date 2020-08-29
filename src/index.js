import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
=======

>>>>>>> dffd526abb5dc4e1fb55bc731512233ffe787fc3
import store from "./store/init";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
