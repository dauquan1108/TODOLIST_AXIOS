import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
//-----
import { connect } from "react-redux";
import { ON_DELETE_TODO_LIST_ALL_SAGA } from "../actions/index";
///--------
import { getFooterTodos } from "../selectors";

class Footer extends Component {
  removeAllTodoList = () => {
    const { onDeleteAllTodoListSaga, todo } = this.props;
    onDeleteAllTodoListSaga(todo);
  };

  onClickAll = () => {
    const { onStatus } = this.props;
    onStatus("all");
  };
  onClickActive = () => {
    const { onStatus } = this.props;
    onStatus("active");
  };
  onClickCompleted = () => {
    const { onStatus } = this.props;
    onStatus("completed");
  };

  render() {
    const { todo, todoNews, status } = this.props;
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>{todoNews}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#All"
                className={status === "all" ? "selected" : ""}
                onClick={this.onClickAll}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                className={status === "active" ? "selected" : ""}
                onClick={this.onClickActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                className={status === "completed" ? "selected" : ""}
                onClick={this.onClickCompleted}
              >
                Completed
              </a>
            </li>
          </ul>
          {todo.filter((item) => item.isComplete).length > 0 && (
            <a
              href="#ClearCompleted"
              className="clear-completed"
              onClick={this.removeAllTodoList}
            >
              Clear completed
            </a>
          )}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoNews: getFooterTodos(state),
    todo: state.toDoList,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteAllTodoListSaga: (todoList) => {
      dispatch(ON_DELETE_TODO_LIST_ALL_SAGA(todoList));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
