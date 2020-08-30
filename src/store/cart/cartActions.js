import cartTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartTypes.toggleCartIcon,
});

export const addItem = (item) => ({
  type: cartTypes.itemWasAdded,
  payload: item,
});
