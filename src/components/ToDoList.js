import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";
// import Button from "./Button";

class ToDoList extends Component {
  render() {
    const {
      toDoListView,
      onClickCheckBox,
      onDeleteItem,
      onClickPen,
    } = this.props;
    return (
      <div className="ContentToDoList">
        {toDoListView.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onClickCheckBox={onClickCheckBox}
              onDeleteItem={onDeleteItem}
              onClickPen={onClickPen}
            />
          );
        })}
        {/* <Button /> */}
      </div>
    );
  }
}

export default ToDoList;
