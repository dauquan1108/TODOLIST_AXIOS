import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";

class Item extends Component {
  onDeleteItemTodo = () => {
    const { onDeleteItem, item } = this.props;
    if (window.confirm("Bạn có chắc muốn xóa item này ?")) {
      onDeleteItem(item.id);
    }
  };
  render() {
    const { item, onClickCheckBox, onClickPen } = this.props;
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
          onClick={() => onClickCheckBox(item.id, item)}
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

export default Item;
