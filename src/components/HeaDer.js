import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkAll.svg";
//----
import { connect } from "react-redux";
import {
  ADD_TODO_LIST_ALL,
  EDIT_TODO_LIST_ALL,
  ON_CHECK_ALL_TODO_LIST_TRUE,
  ON_CHECK_ALL_TODO_LIST_FALSE,
} from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFid from "../utils/Config";
let status = true;
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.input = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { toDoEditing } = this.props;
    if (toDoEditing.id !== prevProps.toDoEditing.id) {
      this.setState({
        value: toDoEditing.title,
      });
    }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  onClickCheckAllItem = () => {
    if (status) {
      this.onCheckAllTodoList_True();
      return (status = false);
    } else {
      this.onCheckAllTodoList_false();
      return (status = true);
    }
  };

  onCheckAllTodoList_True = () => {
    const { toDoList, onCheckAllTodoListTrue } = this.props;
    onCheckAllTodoListTrue(
      toDoList.forEach((todo) => {
        const id = todo.id;
        if (todo.isComplete === false) {
          CallApi("put", `${ConFid.API_URL}/${id}`, {
            id: { id },
            isComplete: true,
          })
            .then((response) => {})
            .catch((error) => {
              console.log("Lỗi", error);
            });
        }
      })
    );
  };

  onCheckAllTodoList_false = () => {
    const { toDoList, onCheckAllTodoListFalse } = this.props;
    onCheckAllTodoListFalse(
      toDoList.forEach((todo) => {
        const id = todo.id;
        if (todo.isComplete === true) {
          CallApi("put", `${ConFid.API_URL}/${id}`, {
            id: { id },
            isComplete: false,
          })
            .then((response) => {})
            .catch((error) => {
              console.log("Lỗi", error);
            });
        }
      })
    );
  };

  handleSubmit = (event) => {
    const { toDoEditing, editTodoList } = this.props;
    const value = this.input.current.value;
    const id = toDoEditing.id;
    // console.log("----", toDoEditing);
    // console.log(id);
    debugger;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      editTodoList(
        id,
        value,
        CallApi("put", `${ConFid.API_URL}/${id}`, { title: value })
          .then((response) => {
            // const { toDoEditing } = this.props;
            // const id = toDoEditing.id;
            // id = -1;
          })
          .catch((error) => {
            console.log("Loi sua: ", error);
          })
      );

      // clear toDoEditTing

      // && Object.keys(toDoEditing.id).length === -1
    } else if (value.trim()) {
      let value = this.input.current.value;
      this.props.TodoListALL(
        value,
        CallApi("post", `${ConFid.API_URL}`, {
          title: value,
          isComplete: false,
        })
          .then((response) => {
            if (response.status === 200) {
            }
          })
          .catch((error) => {
            console.log("Lỗi thêm mới !!!", error);
          })
      );
    }
    this.cleanValue();
    event.preventDefault();
  };

  cleanValue = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    const check = status ? " image" : " image_";

    return (
      <div className="Header">
        <form onSubmit={this.handleSubmit}>
          <img
            alt="Img check all"
            className={check}
            src={checkAll}
            onClick={this.onClickCheckAllItem}
          />
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={this.state.value}
            onChange={this.handleInput}
            autoFocus
            ref={this.input}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
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
    TodoListALL: (item) => {
      dispatch(ADD_TODO_LIST_ALL(item));
    },
    editTodoList: (id, value) => {
      dispatch(EDIT_TODO_LIST_ALL(id, value));
    },
    onCheckAllTodoListTrue: (isCompletedAll) => {
      dispatch(ON_CHECK_ALL_TODO_LIST_TRUE(isCompletedAll));
    },
    onCheckAllTodoListFalse: (isCompletedAll) => {
      dispatch(ON_CHECK_ALL_TODO_LIST_FALSE(isCompletedAll));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaDer);
