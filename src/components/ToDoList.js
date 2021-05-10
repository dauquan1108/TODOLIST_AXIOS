import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";
//---- saga-----//
import { connect } from "react-redux";
import { ON_TODO_LIST_VIEW_ALL_SAGA } from "../actions/index";
//Reselect
import { getTodos } from "../selectors";

class ToDoList extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  render() {
    const { todoList, onClickPen } = this.props;
    return (
      <div className="ContentToDoList">
        {todoList.map((item) => {
          return <Item key={item.id} item={item} onClickPen={onClickPen} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, { tabKey }) => {
  return {
    todoList: getTodos(state, tabKey),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getList: () => {
      console.log(1);
      dispatch(ON_TODO_LIST_VIEW_ALL_SAGA());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
