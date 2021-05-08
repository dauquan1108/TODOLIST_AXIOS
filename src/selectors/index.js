import { createSelector } from "reselect";

const getKey = (state, tabKey) => tabKey;
const getAll = (state, tabKey) => state.toDoList;

export const getFooterTodos = createSelector([getAll, getKey], (todoAll) => {
  // tính ra số phần tử đã được active
  const count = todoAll.filter((item) => !item.isComplete).length || 0;
  return count;
});

export const getTodos = createSelector([getAll, getKey], (todoAll, tabKey) => {
  switch (tabKey) {
    case "ACTIVE":
      return todoAll.filter((item) => !item.isComplete); // array moi
    case "COMPLETED":
      return todoAll.filter((item) => item.isComplete); // array moi
    default:
      return [...todoAll];
  }
});
