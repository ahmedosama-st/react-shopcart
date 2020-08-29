import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = configureStore({ reducer: rootReducer, middlewares });

export default store;
