import cartActionTypes from "./cartTypes";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case cartActionTypes.toggleCartIcon:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.itemWasAdded:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.itemWasClearedFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
