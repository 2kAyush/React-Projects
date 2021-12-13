import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./cart";
import postsReducer from "./posts";

const reducer = combineReducers({
  cartStore: cartReducer,
  postsStore: postsReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
