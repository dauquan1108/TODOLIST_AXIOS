import React, { Component } from "react";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import ThemeContext from "./conText/Theme-Context";
import * as ConFid from "./utils/Config";
//----axios----
// import axios from "axios";
import CallApi from "./utils/CallApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      toDoListView: [],
      statusShow: "all", // statusShow = all || active || completed
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
    // luu tru tren localstorage
    // let toDoList = JSON.parse(localStorage.getItem("keyToDoList")) || [];
    // this.setState({
    //   toDoList: toDoList,
    // });
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: Tính toán lại thằng toDoListView dựa trên thằng toDoList, statusShow
    const { toDoList, statusShow } = state;
    let toDoListView = toDoList;
    let toDoListCompleted = toDoList.filter((num) => num.isComplete);
    switch (statusShow) {
      case "active": {
        toDoListView = toDoList.filter((num) => !num.isComplete);
        break;
      }
      case "completed": {
        toDoListView = toDoListCompleted;
        break;
      }
      default: {
        break;
      }
    }
    return {
      toDoListView,
      isCompletedAll: toDoListCompleted.length === toDoList.length,
    };
  }

  // click vào sửa
  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };


  // check all
  onClickCheckAllItem = () => {
    const { isCompletedAll } = this.state;
    if (isCompletedAll) {
      this.removeCompletedAll();
    } else {
      this.completedAll();
    }
  };

  completedAll = () => {
    const { toDoList } = this.state;
    toDoList.map((item) => {
      const id = item.id;
      if (item.isComplete === false) {
        const axios = require("axios").default;
        const updatedPost = {
          id: { id },
          isComplete: true,
        };
        const sendPutRequest = async () => {
          try {
            const resp = await axios.put(
              `${ConFid.API_URL}/${id}`,
              updatedPost
            );
            console.log(resp.data);
          } catch (err) {
            console.error(err);
          }
        };
        item.isComplete = true;
        this.setState({
          toDoList,
        });

        sendPutRequest();
      }
    });

    document.cookie = "username= completedAll";
  };

  removeCompletedAll = () => {
    const { toDoList } = this.state;
    toDoList.map((item) => {
      const id = item.id;
      if (item.isComplete === true) {
        const axios = require("axios").default;
        const updatedPost = {
          id: { id },
          isComplete: false,
        };
        const sendPutRequest = async () => {
          try {
            const resp = await axios.put(
              `${ConFid.API_URL}/${id}`,
              updatedPost
            );
            console.log(resp.data);
          } catch (err) {
            console.error(err);
          }
          item.isComplete = false;
          this.setState({
            toDoList,
          });
        };
        sendPutRequest();
      }
    });
    document.cookie = "username= removeCompletedAll";
  };

  updateStatusShow = (statusShow) => {
    this.setState({
      statusShow,
    });
  };

  getNumberToDoActive = () => {
    const { toDoList } = this.state;
    const toDoListActive = toDoList.filter((num) => !num.isComplete);
    return toDoListActive.length;
  };

  removeAllToDoListCompleted = () => {
    const { toDoList } = this.state;
    toDoList.forEach((item) => {
      if (item.isComplete === true) {
        CallApi("delete", `${ConFid.API_URL}/${item.id}`)
          .then((response) => {})
          .catch((error) => {
            console.log("Lỗi RemoveAll !", error);
          });
        this.setState({
          toDoList: toDoList.filter((num) => !num.isComplete),
        });
      }
    });
  };

  render() {
    const {
      toDoListView,
      toDoEditing,
      statusShow,
      toDoList,
      isCompletedAll,
    } = this.state;
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
              addToDo={this.addToDo}
              onClickCheckAllItem={this.onClickCheckAllItem}
              handleUpdate={this.handleUpdate}
              ref={this.myHeader}
            />
            <ToDoList
              toDoListView={toDoListView}
              onClickCheckBox={this.onClickCheckBox}
              onClickPen={this.onClickPen}
              onDeleteItem={this.onDeleteItem}
            />
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
export default App;
