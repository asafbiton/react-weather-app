import { combineReducers } from "redux";
import ChangeUnit from "./ChangeUnit.reducer";

export default combineReducers({
  unit: ChangeUnit
});
