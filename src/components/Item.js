import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
//----
import {
  ON_ITEM_DELETE_TODO_LIST_SAGA,
  ON_ITEM_CHECKBOX_SAGA,
} from "../actions/index";
import { connect } from "react-redux";

class Item extends Component {
  onCheckBox = () => {
    const { item } = this.props;
    this.props.onItemCheckboxSaga(item);
  };
  onDeleteItemTodo = () => {
    if (window.confirm("Bạn có chắc muốn xóa item này ?")) {
      const id = this.props.item.id;
      this.props.onDeleteTodoItemSaga(id);
    }
  };

  render() {
    const { item, onClickPen } = this.props;
    let nameClass = "ItemText";
    if (item.isComplete) {
      nameClass += " Item-Complete";
    }

    return (
      <div className="Item">
        <input
          className="CheckBox"
          type="checkbox"
          checked={item.isComplete}
          onClick={this.onCheckBox}
          onChange={() => {}}
        />
        <p className={nameClass}>{item.title}</p>
        <img
          alt="Img update"
          className="Pen"
          src={penImg}
          onClick={() => onClickPen(item)}
        />
        <img
          alt="Img delete"
          className="Delete"
          src={deleteImg}
          onClick={this.onDeleteItemTodo}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { toDoList: state.toDoList };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTodoItemSaga: (id) => {
      dispatch(ON_ITEM_DELETE_TODO_LIST_SAGA(id));
    },
    onItemCheckboxSaga: (id) => {
      dispatch(ON_ITEM_CHECKBOX_SAGA(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
