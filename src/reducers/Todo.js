import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  switch (action.type) {
    case types.TODO_LIST_VIEW:
      //toDoList => lay o file trong file Todo.js 
      state = action.toDoList;
      return [...state];
    case types.ADD_TODO_LIST:
      const addTodoList = [...state];
      addTodoList.push({
        title: action.item,
        isComplete: false,
      });
      return [...addTodoList];
    case types.EDIT_ITEM_TODO_LIST:
      const idEdit = action.id;
      const value = action.value;
      const editTodoList = [...state];
      editTodoList.forEach((todo) => {
        if (todo.id === idEdit) {
          todo.title = value;
        }
      });
      return [...editTodoList];
    case types.DELETE_TODO_LIST:
      const ToDoList = [...state];
      const todoListNew = ToDoList.filter((todo) => todo.id !== action.id);
      return todoListNew;
    case types.ITEM_CHECKBOX:
      const id = action.id;
      const todoListCheckBox = [...state];
      todoListCheckBox.forEach((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return [...todoListCheckBox];

    case types.DELETE_TODO_LIST_ALL:
      //debugger;
      const deleteTodoListAll = [...state];
      deleteTodoListAll.map((todo) => {
        if (todo.isComplete === true) {
          const id = todo.id;
          console.log("----id----", id);
          const clearItem = deleteTodoListAll.filter((num) => !num.isComplete);
          console.log([...clearItem]);
        }
      });
      //debugger;
      return [...deleteTodoListAll];

    default:
      return [...state];
  }
};

export default Todo;
