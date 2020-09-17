import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./views/homepage";
import ShopPage from "./views/shop";
import AuthenticationPage from "./views/authentication";
import Header from "./components/partials/header";
import CheckoutPage from "./views/checkout";

import { auth, createUserProfileDocument } from "./firebase/init";
import { setCurrentUser } from "./store/users/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./store/users/userSelectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
