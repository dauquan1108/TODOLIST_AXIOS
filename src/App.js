import React, { Component } from "react";
import "./components/HeaDer.css";
import Menu from "./reactRouter/Menu";
import ThemeContext from "./conText/Theme-Context";

class App extends Component {
  render() {
    let { theme } = this.context;
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
      </div>
    );
  }
}
App.contextType = ThemeContext;
export default App;
