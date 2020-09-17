import React from "react";
import Button from "./partials/button";

import "../assets/scss/cart-dropdown.scss";
import CartItem from "./cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../store/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../store/cart/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
