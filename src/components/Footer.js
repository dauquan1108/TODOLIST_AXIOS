import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
//-----
import { connect } from "react-redux";
import { ON_DELETE_TODO_LIST_ALL } from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFig from "../utils/Config";
///--------
import { getFooterTodos } from "../selectors";

class Footer extends Component {
  removeAllTodoList = () => {
    // const { onDeleteAllTodoList, todo } = this.props;
    // onDeleteAllTodoList(
    //   todo.forEach((todo) => {
    //     if (todo.isComplete === true) {
    //       CallApi("delete", `${ConFig.API_URL}/${todo.id}`).catch((error) => {
    //         console.log("Loi: ", error, "id ", todo.id);
    //       });
    //     }
    //   })
    // );
  };

  onClickAll = () => {
    const { onChangeTab } = this.props;
    onChangeTab("ALL");
  };
  onClickActive = () => {
    const { onChangeTab } = this.props;
    onChangeTab("ACTIVE");
  };
  onClickCompleted = () => {
    const { onChangeTab } = this.props;
    onChangeTab("COMPLETED");
  };

  render() {
    const {
      todo,
      onClickAllS,
      onClickActiveS,
      onClickCompletedS,
      todoNews,
    } = this.props;
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
                //className={onClickAllS ? "selected" : ""}
                onClick={this.onClickAll}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                //className={onClickActiveS ? "selected" : ""}
                onClick={this.onClickActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                // className={onClickCompletedS ? "selected" : ""}
                className="onClickCompletedS"
                onClick={this.onClickCompleted}
              >
                Completed
              </a>
            </li>
          </ul>
          {todoNews && (
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
  // console.log("chay  lai");
  return {
    todoNews: getFooterTodos(state),
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
