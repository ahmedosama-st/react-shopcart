import React from "react";
import Button from "./partials/button";

import "../assets/scss/cart-dropdown.scss";
import CartItem from "./cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../store/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
