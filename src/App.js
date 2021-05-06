import React, { Component } from "react";
import "./components/HeaDer.css";
import Menu from "./reactRouter/Menu";
import TodoListAll from "./components/TodoListAll";
import ThemeContext from "./conText/Theme-Context";
class App extends Component {
  render() {
    let { theme, toggleTheme } = this.context;
    return (
      <div
        style={{
          background: theme.background,
          minHeight: "100vh",
          color: theme.foreground,
        }}
      >
        <div>
          <Menu />
        </div>
        <div className="ButtonChange">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
        <TodoListAll />
      </div>
    );
  }
}
App.contextType = ThemeContext;
export default App;
