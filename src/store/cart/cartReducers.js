import cartActionTypes from "./cartTypes";

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case cartActionTypes.toggleCartIcon:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
