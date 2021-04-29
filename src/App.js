import React, { Component } from "react";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import ThemeContext from "./conText/Theme-Context";

// Redux
import { connect } from "react-redux";
class App extends Component {
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
    let { theme, toggleTheme } = this.context;
    return (
      <div
        style={{
          background: theme.background,
          minHeight: "100vh",
          color: theme.foreground,
        }}
      >
        <div className="ButtonChange">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
        <div className="App">
          <div className="Content">
            <HeaDer toDoEditing={toDoEditing} onClean={this.onClean} />
            <ToDoList onClickPen={this.onClickPen} />
            {todoListNew.length > 0 && <Footer />}
          </div>
        </div>
      </div>
    );
  }
}
App.contextType = ThemeContext;
const mapStateToProps = (state) => {
  return {
    todoListNew: state.toDoList,
  };
};

export default connect(mapStateToProps, null)(App);
