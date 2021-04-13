import React, { Component } from "react";
import ThemeContext from "../conText/Theme-Context";

class Cong extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ number, clickCong, clickTru, theme }) => (
          <div>
            <button onClick={clickCong} style={{backgroundColor:theme.button}}> + </button>
            <strong>{number}</strong>
            <button onClick={clickTru} style={{backgroundColor: theme.button}}> - </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Cong;
