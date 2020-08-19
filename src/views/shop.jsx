import React, { Component } from "react";
import SHOPPING_ITEMS_COLLECTION from "../assets/requisites/shopping-items-collection";
import CollectionPreview from "../components/collection-preview";

class ShopPage extends Component {
  state = { collections: SHOPPING_ITEMS_COLLECTION };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
