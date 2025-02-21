import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { restaurantsOrderReducer } from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
const { authReducer } = require("./Authentication/Reducer");

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder:restaurantsOrderReducer,
    ingredients:ingredientReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));