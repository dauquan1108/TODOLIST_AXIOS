import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
//-----
import { connect } from "react-redux";
import { ON_DELETE_TODO_LIST_ALL } from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFig from "../utils/Config";

class Footer extends Component {
  removeAllTodoList = () => {
    const { onDeleteAllTodoList, toDoList } = this.props;
    onDeleteAllTodoList(toDoList.forEach((todo) => {
      if(todo.isComplete === true){
        CallApi("delete", `${ConFig.API_URL}/${todo.id}`)
        .then((response)=>{
          console.log("ok",response);
        })
        .catch((error)=>{
          console.log("Loi !", error);
        })
      }
    }));
  };
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
    toDoList: state.toDoList,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteAllTodoList: () => {
      dispatch(ON_DELETE_TODO_LIST_ALL());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
