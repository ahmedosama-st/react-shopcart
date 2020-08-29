<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
=======
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

>>>>>>> dffd526abb5dc4e1fb55bc731512233ffe787fc3
import rootReducer from "./rootReducer";

const middlewares = [logger];

<<<<<<< HEAD
const store = createStore(rootReducer, applyMiddleware(...middlewares));
=======
const store = configureStore({ reducer: rootReducer, middlewares });
>>>>>>> dffd526abb5dc4e1fb55bc731512233ffe787fc3

export default store;
