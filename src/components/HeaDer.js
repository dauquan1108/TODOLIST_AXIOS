import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkAll.svg";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.input = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { toDoEditing } = this.props;
    if (toDoEditing.id !== prevProps.toDoEditing.id) {
      this.setState({
        value: toDoEditing.title,
      });
    }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  onClickCheckAllItem = () => {
    const { onClickCheckAllItem } = this.props;
    onClickCheckAllItem();
  };

  handleSubmit = (event) => {
    const { addToDo, handleUpdate, toDoEditing } = this.props;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      handleUpdate(toDoEditing, this.input.current.value);
    } else if (this.input.current.value.trim()) {
      addToDo(this.input.current.value);
    }
    this.cleanValue();
    event.preventDefault();
  };

  cleanValue = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    let check;
    const { isCompletedAll } = this.props;
    if (isCompletedAll === false) {
      check += " image";
    } else {
      check += " image_";
    }

    return (
      <div className="Header">
        <form onSubmit={this.handleSubmit}>
          <img
            alt="Img check all"
            className={check}
            src={checkAll}
            onClick={this.onClickCheckAllItem}
          />
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={this.state.value}
            onChange={this.handleInput}
            autoFocus
            ref={this.input}
          />
          <input className="button" type="submit" value="Submit" />
          <hr />
        </form>
      </div>
    );
  }
}

export default HeaDer;
