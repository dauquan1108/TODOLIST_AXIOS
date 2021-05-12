import { createSelector } from "reselect";

const getKey = (state, status) => status;
const getAll = (state, status) => state.toDoList;

export const getFooterTodos = createSelector([getAll, getKey], (todoAll) => {
  const count = todoAll.filter((item) => !item.isComplete).length;
  return count;
});

export const getTodos = createSelector([getAll, getKey], (todoAll, status) => {
  switch (status) {
    case "active":
      return todoAll.filter((item) => !item.isComplete); // array moi
    case "completed":
      return todoAll.filter((item) => item.isComplete); // array moi
    default:
      return [...todoAll];
  }
});
