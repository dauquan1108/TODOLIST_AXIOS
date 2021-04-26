import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";
//----
import { connect } from "react-redux";
import { TODO_LIST_VIEW_ALL } from "../actions/index";
import CallApi from "../utils/CallApi";

class ToDoList extends Component {
  componentDidMount() {
    CallApi("get")
      .then((response) => {
        this.props.TodoListALL(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { toDoList, onClickPen } = this.props;
    return (
      <div className="ContentToDoList">
        {toDoList.map((item) => {
          return <Item key={item.id} item={item} onClickPen={onClickPen} />;
        })}
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
    TodoListALL: (toDoList) => {
      dispatch(TODO_LIST_VIEW_ALL(toDoList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
