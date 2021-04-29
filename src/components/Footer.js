import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
//-----
import { connect } from "react-redux";
import {
  ON_DELETE_TODO_LIST_ALL,
  ON_CLICK_ALL,
  ON_CLICK_ACTIVE,
  ON_CLICK_COMPLETED,
} from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFig from "../utils/Config";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusShow: "all", // statusShow = all || active || completed
    };
  }
  removeAllTodoList = () => {
    const { onDeleteAllTodoList, toDoList } = this.props;
    onDeleteAllTodoList(
      toDoList.forEach((todo) => {
        if (todo.isComplete === true) {
          CallApi("delete", `${ConFig.API_URL}/${todo.id}`)
            .then((response) => {
              console.log("ok", response);
            })
            .catch((error) => {
              console.log("Loi: ", error, "id ", todo.id);
            });
        }
      })
    );
  };

  onClickAll = () => {
    const { onClickAllS } = this.props;
    onClickAllS();
  };
  onClickActive = () => {
    const { onClickActiveS } = this.props;
    onClickActiveS();
  };
  onClickCompleted = () => {
    const { onClickCompletedS } = this.props;
    onClickCompletedS();
  };

  render() {
    const {
      toDoList,
      onClickAllS,
      onClickActiveS,
      onClickCompletedS,
    } = this.props;
    const numberItem = toDoList.filter((num) => !num.isComplete);
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>{numberItem.length}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#Activeeteeaometee"
                className={onClickAllS ? "selected" : ""}
                onClick={this.onClickAll}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                className={onClickActiveS ? "selected" : ""}
                onClick={this.onClickActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                className={onClickCompletedS ? "selected" : ""}
                onClick={this.onClickCompleted}
              >
                Completed
              </a>
            </li>
          </ul>
          {toDoList.filter((num) => num.isComplete).length > 0 && (
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
    onClickAllS: () => {
      dispatch(ON_CLICK_ALL());
    },
    onClickActiveS: () => {
      dispatch(ON_CLICK_ACTIVE());
    },
    onClickCompletedS: () => {
      dispatch(ON_CLICK_COMPLETED());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
