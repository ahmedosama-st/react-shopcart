import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
