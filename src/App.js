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
      toDoList: [],
      toDoEditing: {},
    };
    this.myHeader = React.createRef();
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
    let toDoList = JSON.parse(localStorage.getItem("keyToDoList")) || [];
  }
  // localStorage.setItem("keyToDoList", JSON.stringify(Test)); dùng trong them
  // click vào sửa
  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };

  getNumberToDoActive = () => {
    const { toDoList } = this.state;
    const toDoListActive = toDoList.filter((num) => !num.isComplete);
    return toDoListActive.length;
  };

  render() {
    const { toDoEditing, statusShow, toDoList, isCompletedAll } = this.state;
    let { theme, toggleTheme } = this.context;
    const numberToDoActive = this.getNumberToDoActive();
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
            <HeaDer
              isCompletedAll={isCompletedAll}
              toDoEditing={toDoEditing}
              onClickCheckAllItem={this.onClickCheckAllItem}
            />
            <ToDoList onClickPen={this.onClickPen} />
            {toDoList.length > 0 && (
              <Footer
                toDoList={toDoList}
                numberToDoActive={numberToDoActive}
                updateStatusShow={this.updateStatusShow}
                statusShow={statusShow}
                removeAllToDoListCompleted={this.removeAllToDoListCompleted}
              />
            )}
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
