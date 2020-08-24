import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./views/homepage";
import ShopPage from "./views/shop";
import AuthenticationPage from "./views/authentication";
import Header from "./components/partials/header";
import { auth, createUserProfileDocument } from "./firebase/init";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
