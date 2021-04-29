import { put, take } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import CallApi from "../utils/CallApi";

export function* watcherGetListTodo() {
  while (true) {
    yield take(types.TODO_LIST_VIEW_GET);
    const response = yield CallApi()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Loi: ", error);
      });
    if (response.status === 200) {
      yield put({ type: types.TODO_LIST_VIEW, toDoList: response.data });
    }
  }
}

export function* watcherPutCheckItem() {
  while (true) {
    yield take();
  }
}
