import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  switch (action.type) {
    case types.TODO_LIST_VIEW:
      console.log(5);
      //toDoList => lay o file trong file Todo.js
      state = action.toDoList;
      ToDoList = [...state];
      return [...state];
    case types.ADD_TODO_LIST_POST:
      state.push({
        id: ToDoList.length + 1,
        title: action.item,
        isComplete: false,
      });
      return [...state];

    case types.EDIT_ITEM_TODO_LIST:
      const idEdit = action.id;
      const value = action.value;
      state.forEach((todo) => {
        if (todo.id === idEdit) {
          todo.title = value;
        }
      });
      return [...state];

    case types.DELETE_TODO_LIST:
      const todoListNew = state.filter((todo) => todo.id !== action.id);
      return [...todoListNew];

    case types.ITEM_CHECKBOX:
      const id = action.id;
      state.forEach((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return [...state];

    case types.DELETE_TODO_LIST_ALL:
      return [...state.filter((item) => !item.isComplete)];

    case types.CHECK_ALL_TODO_LIST_TRUE:
      ToDoList.forEach((todo) => {
        if (todo.isComplete === false) {
          todo.isComplete = true;
        }
      });
      return [...ToDoList];

    case types.CHECK_ALL_TODO_LIST_FALSE:
      ToDoList.forEach((todo) => {
        if (todo.isComplete === true) {
          todo.isComplete = false;
        }
      });
      return [...ToDoList];

    case types.ONCLICK_ALL:
      return [...ToDoList];

    case types.ONCLICK_ACTIVE:
      state = ToDoList.filter((item) => !item.isComplete);
      return [...state];

    case types.ONCLICK_COMPLETED:
      state = ToDoList.filter((item) => item.isComplete);
      return [...state];

    default:
      return [...state];
  }
};

export default Todo;
