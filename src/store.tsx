import { createStore } from "redux";
import { weatherAppReducer } from "./StateManagement/reducers";

export const store = createStore(
  weatherAppReducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
