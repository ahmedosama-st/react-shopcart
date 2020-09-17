import cartTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartTypes.toggleCartIcon,
});

export const addItem = (item) => ({
  type: cartTypes.itemWasAdded,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartTypes.itemWasRemoved,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartTypes.itemWasClearedFromCart,
  payload: item,
});
