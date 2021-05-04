import { all } from "redux-saga/effects";
import { watcherGetListTodo, watcherPutCheckItem } from "./SagaTodo";

export default function* mySaga() {
  yield all([watcherGetListTodo(), watcherPutCheckItem()]);
}
