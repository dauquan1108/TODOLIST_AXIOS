import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";
//---- saga-----//
import { connect } from "react-redux";
import { ON_TODO_LIST_VIEW_ALL_SAGA } from "../actions/index";

class ToDoList extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
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
    getList: () => {
      console.log(1);
      dispatch(ON_TODO_LIST_VIEW_ALL_SAGA());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
