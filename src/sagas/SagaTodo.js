import { put, take } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import CallApi from "../utils/CallApi";

export function* watcherGetListTodo() {
  while (true) {
    yield take(types.TODO_LIST_VIEW_GET);
    console.log(3);
    const response = yield CallApi().catch((error) => {
      console.log("Loi: ", error);
    });
    if (response.status === 200) {
      console.log(4);
      yield put({ type: types.TODO_LIST_VIEW, toDoList: response.data });
    }
  }
}

export function* watcherPutCheckItem() {
  while (true) {
    const value = yield take(types.ADD_TODO_LIST_SAGA);
    console.log(value.payload.item);
  }
}
