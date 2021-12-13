import { createStore, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";

import allTasks from "./allTasks";

const store = createStore(allTasks, applyMiddleware(thunk));

export default store;
