import { thunk } from "redux-thunk";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
const { authReducer } = require("./Authentication/Reducer");

const rootReducer = combineReducers({
    auth: authReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));