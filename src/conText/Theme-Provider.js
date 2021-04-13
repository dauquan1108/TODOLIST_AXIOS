import React, { Component } from "react";
import ThemeContext,  { themes } from "../conText/Theme-Context";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      number:0,
    };    
  }
  // Doi mau nen
  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };
  //cong va tru
  clickCong =()=>{
    const {number} = this.state;
    this.setState({
      number: number+1
    });
  }
  clickTru =()=>{
    const {number} = this.state;
    this.setState({
      number: number-1
    });
  }


  render() {
    return (
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme,
            number: this.state.number,
            clickCong: this.clickCong,
            clickTru: this.clickTru,
            
          }}
        >
          {this.props.children}
        </ThemeContext.Provider>
    );
  }
}
