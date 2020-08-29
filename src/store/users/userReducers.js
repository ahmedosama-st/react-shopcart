import { userTypes } from "./userTypes";

const initialState = { currentUser: null };

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userTypes.setCurrentUser:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
