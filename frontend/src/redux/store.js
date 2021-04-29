//////// All the states data is stored ///////////
// step 1 --> Redux

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}


function loadFromLocalStorage(state) {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined 
        return JSON.parse(serializedState)
     
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()
const store = createStore(rootReducer, persistedState,composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
