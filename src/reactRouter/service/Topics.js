import React, { Component } from "react";
import "./style.css";
//----------- React Router
import { BrowserRouter as Prompt } from "react-router-dom";
class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };
  clearValue = () => {
    this.setState({
      value: "",
    });
  };
  handleSubmit = (e) => {
    const { value } = this.state;
    alert(value);
    this.clearValue();
    e.preventDefault();
  };
  render() {
    const { checkPrompt, onClick } = this.props;
    return (
      <div className="Topics">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={this.state.value}
            onChange={this.handleInput}
            autoFocus
          />

          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <button
          onClick={() => {
            onClick(true);
          }}
        >
          prompt true
        </button>
        <br />
        <Prompt
          when={checkPrompt}
          message={(location) =>
            `Bạn có muốn thoát khỏi trang này không  ${location.pathname}`
          }
        />
        <button
          onClick={() => {
            onClick(false);
          }}
        >
          prompt false
        </button>
        <h3> React Router Prompt</h3>
      </div>
    );
  }
}
export default Topics;
