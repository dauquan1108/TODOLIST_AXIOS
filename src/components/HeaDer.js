import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkAll.svg";
//----
import { connect } from "react-redux";
import { ADD_TODO_LIST_ALL } from "../actions/index";
import CallApi from "../utils/CallApi";
import * as ConFid from "../utils/Config";
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
      let value = this.input.current.value;

      this.props.TodoListALL( value,
        CallApi("post", `${ConFid.API_URL}`, {
          title: value,
          isComplete: false,
        })
          .then((response) => {
            if(response.status === 200){

            }
          })
          .catch((error) => {
            console.log("Lỗi thêm mới !!!", error);
            alert("loi sever vui long xoa phan tu moi duoc them !");
          })
      );
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
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    TodoListALL: (item) => {
      dispatch(ADD_TODO_LIST_ALL(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaDer);
