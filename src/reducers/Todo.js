import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  switch (action.type) {
    case types.TODO_LIST_VIEW:
      state = action.toDoList;
      return [...state];
    case types.ADD_TODO_LIST:
      return [...state];
    default:
      return [...state];
  }
};

export default Todo;
