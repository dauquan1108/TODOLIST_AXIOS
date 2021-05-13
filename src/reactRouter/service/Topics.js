import React, { Component } from "react";
import "./style.css";

//------- React router----------//
import { Prompt } from "react-router-dom";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      checkPrompt: false,
    };
  }
  handleInput = (e) => {
    const value = e.target.value.length > 0;
    console.log({ value });
    this.setState({ value: e.target.value, checkPrompt: value });
  };
  clearValue = () => {
    this.setState({
      value: "",
    });
  };
  handleSubmit = (e) => {
    const { value } = this.state;
    this.setState({ checkPrompt: false });
    e.target.reset();
    this.clearValue();
    e.preventDefault();
  };
  render() {
    const { checkPrompt } = this.state;
    return (
      <div className="Topics">
        <form onSubmit={this.handleSubmit}>
          <Prompt
            when={checkPrompt}
            message={(location) =>
              `Ban co muon di toi trang ${location.pathname}`
            }
          />
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={this.state.value}
            onChange={this.handleInput}
            autoFocus
          />
          <button className="button">Submit</button>
          <h1>
            Blocking?{" "}
            {checkPrompt ? "Yes, click a link or the back button" : "Nope"}
          </h1>
        </form>
        <h3> React Router Prompt</h3>
      </div>
    );
  }
}
export default Topics;
