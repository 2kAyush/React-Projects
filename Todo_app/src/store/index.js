import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import allTasks from "./allTasks";

const store = createStore(allTasks, applyMiddleware(thunk));

export default store;
