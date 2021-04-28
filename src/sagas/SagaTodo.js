import { call, put, take } from "redux-saga/effects";
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
        console.log(error);
      });
    console.log("response", response);
    console.log("types.TODO_LIST_VIEW", types.TODO_LIST_VIEW);
    yield put({ type: types.TODO_LIST_VIEW, toDoList: response.data });
  }
}

export function* watcherPutCheckItem() {
  while (true) {
    yield take();
  }
}
