import { combineReducers, createStore ,applyMiddleware} from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import {thunk} from "redux-thunk";

const rootReducer= combineReducers({
   product: productReducer,
   restaurant: restaurantReducer,
   cart: cartReducer,
})



const store =createStore(rootReducer,applyMiddleware(thunk));


export default store;