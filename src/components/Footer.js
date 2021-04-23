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

  // componentDidUpdate(prevProps, prevState) {

  //   //debugger;
  //   const { toDoList, onClickActiveS, onClickCompletedS } = prevProps;
  //   const { statusShow } = this.state;
  //   // switch (statusShow) {
  //   //   case "active": {
  //   //     console.log("----active----");
  //   //     //const todoActive = toDoList.filter((item) => !item.isComplete);
  //   //     //onClickActiveS();
  //   //     //return [...todoActive];
  //   //     break;
  //   //   }
  //   //   case "completed": {
  //   //     console.log("----completed----");
  //   //     // const todoComplete = toDoList.filter((item) => item.isComplete);
  //   //     //return [...todoComplete];
  //   //     //onClickCompletedS();
  //   //     break;
  //   //   }
  //   //   case "all": {
  //   //     console.log("----All----");
  //   //     break;
  //   //   }
  //   //   default: {
  //   //     console.log("----xxxxx----");
  //   //   }
  //   // }

  //   if (statusShow === "active") {
  //     // onClickActiveS();
  //     console.log("----active----");
  //   }
  //   if (statusShow === "completed") {
  //     // onClickCompletedS();
  //     console.log("----completed----");
  //   }
  //   if (statusShow === "all") {
  //     // onClickCompletedS();
  //     console.log("----all----");
  //   }
  // }
  onClickStatus = (statusShow) => {
    this.setState({
      statusShow,
    });
  };
  onClickActive = () => {
    const { toDoList, onClickActiveS, onClickCompletedS } = this.props;
    onClickActiveS();
  };
  onClickCompleted = () => {
    const { toDoList, onClickActiveS, onClickCompletedS } = this.props;
    onClickCompletedS();
  };
  onClickAll = () => {
    this.onClickStatus("all");
  };
  render() {
    const { toDoList } = this.props;
    const { statusShow } = this.state;
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
                href="#all"
                className={statusShow === "all" ? "selected" : ""}
                onClick={this.onClickAll}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                className={statusShow === "active" ? "selected" : ""}
                onClick={this.onClickActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                className={statusShow === "completed" ? "selected" : ""}
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
