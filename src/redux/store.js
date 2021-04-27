//////// All the states data is stored ///////////
// step 1 --> Redux

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
