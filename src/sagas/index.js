import { all } from "redux-saga/effects";
import {
  watcherGetListTodo,
  watcherAddItem,
  watcherEditItem,
  watcherDeleteItem,
  watcherItemCheckBox,
  watcherCheckAllTodoListTrue,
  watcherCheckAllTodoListFalse,
  watcherDeleteTodoListAll,
} from "./SagaTodo";

export default function* mySaga() {
  yield all([
    watcherGetListTodo(),
    watcherAddItem(),
    watcherEditItem(),
    watcherDeleteItem(),
    watcherItemCheckBox(),
    watcherCheckAllTodoListTrue(),
    watcherCheckAllTodoListFalse(),
    watcherDeleteTodoListAll(),
  ]);
}
