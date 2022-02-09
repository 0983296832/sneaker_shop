import { combineReducers } from "redux";

import searchReducer from "./searchReducer";

const allReducer = combineReducers({
  search: searchReducer,
});

export default allReducer;
