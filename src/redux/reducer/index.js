import { combineReducers } from "redux";
import authReducer from "./auth/index";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
