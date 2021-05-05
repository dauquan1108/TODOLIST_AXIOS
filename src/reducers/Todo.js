import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  switch (action.type) {
    case types.TODO_LIST_VIEW_GET:
      console.log(5);
      //toDoList => lay o file trong file Todo.js
      state = action.toDoList;
      ToDoList = [...state];
      return [...state];
    case types.ADD_TODO_LIST_POST:
      console.log("ToDoList", ToDoList);
      const item = action.title;
      state.push({
        id: state.length + 1,
        title: item,
        isComplete: false,
      });
      return [...state];

    case types.EDIT_ITEM_TODO_LIST:
      const idEdit = action.item.id;
      const value = action.item.value;
      state.forEach((todo) => {
        if (todo.id === idEdit) {
          todo.title = value;
        }
      });
      return [...state];

    case types.DELETE_ITEM_TODO_LIST:
      const todoListNew = state.filter((todo) => todo.id !== action.id);
      return [...todoListNew];

    case types.ITEM_CHECKBOX:
      const id = action.item.item.id;
      state.forEach((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return [...state];

    case types.DELETE_TODO_LIST_ALL:
      return [...state.filter((item) => !item.isComplete)];

    case types.CHECK_ALL_TODO_LIST_TRUE:
      const todoList = action.toDoList.todoList;
      console.log(action);
      todoList.forEach((todo) => {
        if (todo.isComplete === false) {
          todo.isComplete = true;
        }
      });
      return [...ToDoList];

    case types.CHECK_ALL_TODO_LIST_FALSE:
      console.log(action);
      const todo = action.toDoList.todoList;
      todo.forEach((todo) => {
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
