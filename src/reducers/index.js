import { combineReducers } from "redux";

import toDo from "./Todo";

const appReducers = combineReducers({
  toDoList: toDo,
});
export default appReducers;
