import * as types from "../constants/ActionTypes";

let ToDoList = [];

const Todo = (state = ToDoList, action) => {
  switch (action.type) {
    case types.TODO_LIST_VIEW:
      state = action.toDoList;
      return [...state];
    case types.ADD_TODO_LIST:
      const { ToDoList } = this.state;
      ToDoList.push({ title: action.item, isComplete: false });
      this.setState({
        ToDoList,
      });
      // console.log(action.item);
      return [...state];
    default:
      return [...state];
  }
};

export default Todo;
