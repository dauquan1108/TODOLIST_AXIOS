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

export const EDIT_TODO_LIST_ALL = (id, value) => {
  return {
    type: types.EDIT_ITEM_TODO_LIST,
    id,
    value
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

export const ON_DELETE_TODO_LIST_ALL = ()=>{
  return{
    type: types.DELETE_TODO_LIST_ALL,
    
  }
}