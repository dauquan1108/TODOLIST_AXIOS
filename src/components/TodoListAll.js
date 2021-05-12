import React, { Component } from "react";
import "./HeaDer.css";
import HeaDer from "./HeaDer";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
import ThemeContext from "../conText/Theme-Context";

// Redux
import { connect } from "react-redux";
class TodoListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoEditing: {},
      status: "all",
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
  onStatus = (status) => {
    this.setState({ status: status });
  };

  render() {
    let { toggleTheme } = this.context;
    const { toDoEditing, tabKey, status } = this.state;
    const { todoListNew } = this.props;

    console.log({ todoListNew });

    return (
      <div className="TodoListAll">
        <div className="ButtonChange">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
        <div className="TodoList">
          <HeaDer toDoEditing={toDoEditing} onClean={this.onClean} />
          <ToDoList status={status} onClickPen={this.onClickPen} />
          {todoListNew.length > 0 && (
            <Footer onStatus={this.onStatus} status={status} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoListNew: state.toDoList,
  };
};

TodoListAll.contextType = ThemeContext;
export default connect(mapStateToProps, null)(TodoListAll);
