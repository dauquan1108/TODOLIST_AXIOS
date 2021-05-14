import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkAll.svg";
//----
import { connect } from "react-redux";
import {
  EDIT_ITEM_TODO_LIST_SAGA,
  ON_CHECK_ALL_TODO_LIST_TRUE_SAGA,
  ON_CHECK_ALL_TODO_LIST_FALSE_SAGA,
  ADD_TODO_SAGA,
} from "../actions/index";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      status: true,
      cleanToDoEditing: {},
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
    const { status } = this.state;
    if (status) {
      this.onCheckAllTodoList_True();
      this.setState({
        status: false,
      });
    } else {
      this.onCheckAllTodoList_false();
      this.setState({
        status: true,
      });
    }
  };

  onCheckAllTodoList_True = () => {
    const { toDoList, onCheckAllTodoListTrueSaga } = this.props;
    onCheckAllTodoListTrueSaga(toDoList);
  };

  onCheckAllTodoList_false = () => {
    const { toDoList, onCheckAllTodoListFalseSaga } = this.props;
    onCheckAllTodoListFalseSaga(toDoList);
  };

  handleSubmit = (event) => {
    const { toDoEditing, editItemTodoListSaga, onClean } = this.props;
    const value = this.input.current.value;
    const id = toDoEditing.id;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      editItemTodoListSaga(id, value);
      onClean();
    } else if (value.trim()) {
      let item = this.input.current.value;
      this.props.addTodoSaga(item);
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
    const { status } = this.state;
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
    addTodoSaga: (item) => {
      dispatch(ADD_TODO_SAGA(item));
    },
    editItemTodoListSaga: (id, value) => {
      dispatch(EDIT_ITEM_TODO_LIST_SAGA(id, value));
    },
    onCheckAllTodoListTrueSaga: (isCompletedAll) => {
      dispatch(ON_CHECK_ALL_TODO_LIST_TRUE_SAGA(isCompletedAll));
    },
    onCheckAllTodoListFalseSaga: (isCompletedAll) => {
      dispatch(ON_CHECK_ALL_TODO_LIST_FALSE_SAGA(isCompletedAll));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaDer);
