import React, { Component } from "react";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import ThemeContext from "./conText/Theme-Context";
//----axios----
import CallApi from "./utils/CallApi";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoEditing: {},
    };
  }

  componentDidMount() {
    CallApi("get")
      .then((response) => {
        this.setState({
          toDoList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    let onColor = JSON.parse(localStorage.getItem("color"));
  }
  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };

  onClean = () => {
    const { toDoEditing } = this.state;
    this.setState({
      toDoEditing: {},
    });
  };

  render() {
    const { toDoEditing } = this.state;
    const { todoListNew } = this.props;
    let { theme, toggleTheme } = this.context;
    //let onColor = JSON.parse(localStorage.getItem("color"));
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
