import { combineReducers } from "redux";
import userReducer from "./users/userReducers";
import cartReducer from "./cart/cartReducers";

export default combineReducers({ user: userReducer, cart: cartReducer });
