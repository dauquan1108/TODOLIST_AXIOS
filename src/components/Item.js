import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
//----
import { ON_DELETE_TODO_LIST, ON_ITEM_CHECKBOX } from "../actions/index";
import { connect } from "react-redux";
import CallApi from "../utils/CallApi";
import * as ConFig from "../utils/Config";

class Item extends Component {
  onCheckBox = () => {
    const { item, onItemCheckbox } = this.props;
    onItemCheckbox(
      item.id,
      CallApi("put", `${ConFig.API_URL}/${item.id}`, {
        isComplete: item.isComplete === true ? false : true,
      })
        .then((response) => {})
        .catch((error) => {
          console.log("ID:", item.id, "Loi: ", error);
        })
    );
  };
  onDeleteItemTodo = () => {
    if (window.confirm("Bạn có chắc muốn xóa item này ?")) {
      const id = this.props.item.id;
      this.props.onDeleteTodoItem(
        id,
        CallApi("delete", `${ConFig.API_URL}/${id}`)
          .then((response) => {
            console.log("ok");
          })
          .catch((error) => {
            console.log("Xóa thất bại !", error);
          })
      );
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
    onDeleteTodoItem: (id) => {
      dispatch(ON_DELETE_TODO_LIST(id));
    },
    onItemCheckbox: (id) => {
      dispatch(ON_ITEM_CHECKBOX(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
