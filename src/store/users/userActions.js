import { userTypes } from "./userTypes";

export const setCurrentUser = (user) => ({
  type: userTypes.setCurrentUser,
  payload: user,
});
