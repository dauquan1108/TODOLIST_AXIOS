import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
class Footer extends Component {
  render() {
    const {
      toDoList,
      statusShow,
      numberToDoActive,
      updateStatusShow,
      removeAllToDoListCompleted,
    } = this.props;
    const haveCompleted = toDoList.filter((num) => num.isComplete);
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>{numberToDoActive}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#all"
                className={statusShow === "all" ? "selected" : ""}
                onClick={() => {
                  updateStatusShow("all");
                }}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                className={statusShow === "active" ? "selected" : ""}
                onClick={() => {
                  updateStatusShow("active");
                }}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                className={statusShow === "completed" ? "selected" : ""}
                onClick={() => {
                  updateStatusShow("completed");
                }}
              >
                Completed
              </a>
            </li>
          </ul>
          {haveCompleted.length > 0 && (
            <a
              href="#ClearCompleted"
              className="clear-completed"
              onClick={() => {
                removeAllToDoListCompleted();
              }}
            >
              Clear completed
            </a>
          )}
        </footer>
      </div>
    );
  }
}

export default Footer;
