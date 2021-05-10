import { put, take, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import CallApi from "../utils/CallApi";
import * as ConFig from "../utils/Config";

///-------------------- ham theo doi cua saga--------------------///

export function* watcherGetListTodo() {
  while (true) {
    yield take(types.TODO_LIST_VIEW_SAGA);
    console.log(3);
    const response = yield CallApi().catch((error) => {
      console.log("Loi: ", error);
    });
    if (response.status === 200) {
      console.log(4);
      yield put({ type: types.TODO_LIST_VIEW_GET, toDoList: response.data });
    }
  }
}

export function* watcherAddItem() {
  while (true) {
    const value = yield take(types.ADD_TODO_LIST_SAGA);
    const title = value.payload.item;
    yield call(addItemTodoList, title);
  }
}

export function* watcherEditItem() {
  while (true) {
    const item = yield take(types.EDIT_ITEM_TODO_LIST_SAGA);
    yield call(editItemTodoList, item);
  }
}

export function* watcherDeleteItem() {
  while (true) {
    const idItem = yield take(types.DELETE_ITEM_TODO_LIST_SAGA);
    const id = idItem.id;
    yield call(deleteItemTodo, id);
  }
}

export function* watcherItemCheckBox() {
  while (true) {
    const item = yield take(types.ITEM_CHECKBOX_SAGA);
    yield call(checkBoxItem, item);
  }
}

export function* watcherCheckAllTodoListTrue() {
  while (true) {
    const toDoList = yield take(types.CHECK_ALL_TODO_LIST_TRUE_SAGA);
    yield call(checkAllTodoListTrue, toDoList);
  }
}

export function* watcherCheckAllTodoListFalse() {
  while (true) {
    const toDoList = yield take(types.CHECK_ALL_TODO_LIST_FALSE_SAGA);
    yield call(checkAllTodoListFalse, toDoList);
  }
}

export function* watcherDeleteTodoListAll() {
  while (true) {
    const todoList = yield take(types.DELETE_TODO_LIST_ALL_SAGA);
    yield call(deleteTodoListAll, todoList);
  }
}

///------------------------ham thuc thi saga--------------------///

export function* addItemTodoList(title) {
  CallApi("post", `${ConFig.API_URL}`, {
    title: title,
    isComplete: false,
  }).catch((error) => {
    console.log("Lỗi thêm mới !!!", error);
  });
  yield put({ type: types.ADD_TODO_LIST_POST, title });
}

export function* editItemTodoList(item) {
  CallApi("put", `${ConFig.API_URL}/${item.id}`, { title: item.value }).catch(
    (error) => {
      console.log("Loi sua: ", error);
    }
  );
  yield put({ type: types.EDIT_ITEM_TODO_LIST, item });
}

export function* deleteItemTodo(id) {
  CallApi("delete", `${ConFig.API_URL}/${id}`).catch((error) => {
    console.log("Xóa thất bại !", error);
  });
  yield put({ type: types.DELETE_ITEM_TODO_LIST, id });
}

export function* checkBoxItem(item) {
  CallApi("put", `${ConFig.API_URL}/${item.item.id}`, {
    isComplete: item.item.isComplete === true ? false : true,
  }).catch((error) => {
    console.log("ID:", item.id, "Loi: ", error);
  });
  yield put({ type: types.ITEM_CHECKBOX, item });
}

export function* checkAllTodoListTrue(toDoList) {
  const todo = toDoList.todoList;
  todo.forEach((item) => {
    const id = item.id;
    if (item.isComplete === false) {
      CallApi("put", `${ConFig.API_URL}/${id}`, {
        id: { id },
        isComplete: true,
      }).catch((error) => {
        console.log("Lỗi", error);
      });
    }
  });
  yield put({ type: types.CHECK_ALL_TODO_LIST_TRUE, toDoList });
}

export function* checkAllTodoListFalse(toDoList) {
  const todo = toDoList.todoList;
  todo.forEach((item) => {
    const id = item.id;
    if (item.isComplete === true) {
      CallApi("put", `${ConFig.API_URL}/${id}`, {
        id: { id },
        isComplete: false,
      }).catch((error) => {
        console.log("Lỗi", error);
      });
    }
  });
  yield put({ type: types.CHECK_ALL_TODO_LIST_FALSE, toDoList });
}

export function* deleteTodoListAll(todoList) {
  const todo = todoList.todoList;
  todo.forEach((item) => {
    if (item.isComplete === true) {
      CallApi("delete", `${ConFig.API_URL}/${item.id}`).catch((error) => {
        console.log("Loi: ", error);
      });
    }
  });
  yield put({ type: types.DELETE_TODO_LIST_ALL });
}
