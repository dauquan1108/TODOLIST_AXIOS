import React, { Component } from "react";
import "./HeaDer.css";
import HeaDer from "./HeaDer";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

// Redux
import { connect } from "react-redux";
class TodoListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoEditing: {},
    };
  }

  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };

  onClean = () => {
    this.setState({
      toDoEditing: {},
    });
  };

  render() {
    const { toDoEditing } = this.state;
    const { todoListNew } = this.props;
    return (
      <div className="TodoListAll">
        <HeaDer toDoEditing={toDoEditing} onClean={this.onClean} />
        <ToDoList onClickPen={this.onClickPen} />
        {todoListNew.length > 0 && <Footer />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoListNew: state.toDoList,
  };
};

export default connect(mapStateToProps, null)(TodoListAll);
