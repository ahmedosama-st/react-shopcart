import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./views/homepage";
import ShopPage from "./views/shop";
import AuthenticationPage from "./views/authentication";
import Header from "./components/partials/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
