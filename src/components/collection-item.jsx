import React from "react";

import "../assets/scss/collection-item.scss";
import "../assets/scss/button.scss";
import Button from "./partials/button";
import { addItem } from "../store/cart/cartActions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />

    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>

    <Button onClick={() => addItem(item)} inverted>
      Add to cart
    </Button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
