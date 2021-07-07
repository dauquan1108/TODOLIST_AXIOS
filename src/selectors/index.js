import { createSelector } from "reselect";

const getKey = (state, status) => status;
// toDoList la lay tu Stor ra
const getTodoListAll = (state) => state.toDoList;
export const getFooterTodos = createSelector([getTodoListAll], (todoAll) => {
  const count = todoAll.filter((item) => !item.isComplete).length;
  return count;
});

export const getTodoList = createSelector(
  [getTodoListAll, getKey],
  (todoListAll, status) => {
    switch (status) {
      case "active":
        return todoListAll.filter((item) => !item.isComplete); // array moi
      case "completed":
        return todoListAll.filter((item) => item.isComplete); // array moi
      default:
        return [...todoListAll];
    }
  }
);
