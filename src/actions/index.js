import * as types from "../constants/ActionTypes";

export const TODO_LIST_VIEW_ALL = (toDoList) => {
  return {
    type: types.TODO_LIST_VIEW,
    toDoList,
  };
};

// Saga
export const ON_TODO_LIST_VIEW_ALL = () => {
  console.log(2);
  return {
    type: types.TODO_LIST_VIEW_GET,
  };
};

export const ADD_TODO_LIST_ALL_POST = (item) => {
  return {
    type: types.ADD_TODO_LIST_POST,
    item,
  };
};

export const ADD_TODO_SAGA = (item) => {
  return {
    type: types.ADD_TODO_LIST_SAGA,
    payload: {
      item,
    },
  };
};

export const EDIT_TODO_LIST_ALL = (id, value) => {
  return {
    type: types.EDIT_ITEM_TODO_LIST,
    id,
    value,
  };
};

export const ON_DELETE_TODO_LIST = (id) => {
  return {
    type: types.DELETE_TODO_LIST,
    id,
  };
};

export const ON_ITEM_CHECKBOX = (id) => {
  return {
    type: types.ITEM_CHECKBOX,
    id,
  };
};

export const ON_ITEM_CHECKBOX_SAGA = (id) => {
  return {
    type: types.ITEM_CHECKBOX_SAGA,
    id,
  };
};

export const ON_DELETE_TODO_LIST_ALL = () => {
  return {
    type: types.DELETE_TODO_LIST_ALL,
  };
};

export const ON_CHECK_ALL_TODO_LIST_TRUE = (isCompletedAll) => {
  return {
    type: types.CHECK_ALL_TODO_LIST_TRUE,
    isCompletedAll,
  };
};

export const ON_CHECK_ALL_TODO_LIST_FALSE = (isCompletedAll) => {
  return {
    type: types.CHECK_ALL_TODO_LIST_FALSE,
    isCompletedAll,
  };
};

export const ON_CLICK_ALL = () => {
  return {
    type: types.ONCLICK_ALL,
  };
};

export const ON_CLICK_ACTIVE = () => {
  return {
    type: types.ONCLICK_ACTIVE,
  };
};

export const ON_CLICK_COMPLETED = () => {
  return {
    type: types.ONCLICK_COMPLETED,
  };
};
