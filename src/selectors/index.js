import { createSelector } from "reselect";
let statusShow = "all";

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodo = (state) => state.toDoList;

export const getVisibleTodo = createSelector(
  [getVisibilityFilter, getTodo],
  (visibilityFilter, toDoList) => {
    debugger;
    switch (visibilityFilter) {
      case "all":
        return toDoList;
      case "active":
        return toDoList.filter((item) => !item.isComplete);
      case "completed":
        return toDoList.filter((item) => item.isComplete);
    }
  }
);
