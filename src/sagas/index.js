import { all } from "redux-saga/effects";
import { watcherGetListTodo } from "./SagaTodo";

export default function* mySaga() {
  yield all([watcherGetListTodo()]);
}
