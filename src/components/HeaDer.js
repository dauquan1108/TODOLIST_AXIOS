import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkAll.svg";
//----
import { connect } from "react-redux";
import {
  ADD_TODO_LIST_ALL,
  EDIT_TODO_LIST_ALL,
  ON_CHECK_ALL_TODO_LIST,
} from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFid from "../utils/Config";

class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toDoEditingView: {},
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
    const { onCheckAllTodoList, isCompletedAll } = this.props;
    console.log("xxxxxx", isCompletedAll);
    if (isCompletedAll) {
      onCheckAllTodoList(isCompletedAll, this.onCheckAllTodoList_True());
    } else {
      onCheckAllTodoList(isCompletedAll, this.onCheckAllTodoList_false());
    }
  };

  onCheckAllTodoList_True = () => {
    const { toDoList } = this.props;
    toDoList.forEach((todo) => {
      const id = todo.id;
      if (todo.isComplete) {
        CallApi("put", `${ConFid.API_URL}/${id}`, {
          id: { id },
          isComplete: false,
        })
          .then((response) => {})
          .catch((error) => {
            console.log("Lỗi", error);
          });
      }
    });
  };

  onCheckAllTodoList_false = () => {
    const { toDoList } = this.props;
    toDoList.forEach((todo) => {
      const id = todo.id;
      if (!todo.isComplete) {
        CallApi("put", `${ConFid.API_URL}/${id}`, {
          id: { id },
          isComplete: true,
        })
          .then((response) => {})
          .catch((error) => {
            console.log("Lỗi", error);
          });
      }
    });
  };

  handleSubmit = (event) => {
    //debugger;
    const { toDoEditing, editTodoList } = this.props;
    const { toDoEditingView } = this.state;
    const value = this.input.current.value;
    const id = toDoEditing.id;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      editTodoList(
        id,
        value,
        CallApi("put", `${ConFid.API_URL}/${id}`, { title: value })
          .then((response) => {})
          .catch((error) => {
            console.log("Lỗi Sửa !", error);
          })
      );

      //toDoEditing = "";
      // clear toDoEditTing
    } else if (value.trim()) {
      //debugger;
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
    const { isCompletedAll } = this.props;
    // let check;
    // if (!isCompletedAll) {
    //   check += " image";
    // } else {
    //   check += " image_";
    // }
    const check = isCompletedAll ? " image_" : " image";

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
    onCheckAllTodoList: () => {
      dispatch(ON_CHECK_ALL_TODO_LIST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaDer);
