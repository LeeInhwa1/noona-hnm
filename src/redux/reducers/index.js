import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

// store에 정의할 reducer들을 합친다
export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
