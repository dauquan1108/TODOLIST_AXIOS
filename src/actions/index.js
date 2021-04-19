import * as types from "../constants/ActionTypes";

export const TODO_LIST_VIEW_ALL = (toDoList) => {
  return {
    type: types.TODO_LIST_VIEW,
    toDoList,
  };
};

export const ADD_TODO_LIST_ALL = (item) => {
  return {
    type: types.ADD_TODO_LIST,
    item,
  };
};
