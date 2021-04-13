import React, { Component } from "react";
// thư viện của ClassNames


import "./test.css";

class Test extends Component {
  // constructor(props){
  //   super(props);
  // }

  // onItemClick =(event)=>{
  //   console.log (this.props.items);
  //   this.propsops.items.isComplete = !this.props.items.isComplete;
  //   // Đâỏ ngược trạng thái của các items đang ở true thì thành false
  // }

  // int sum(Int a, Int b) {
  //   return a + b;
  // }
  // sum (10, 10 )
  handleClick = () => {
    const onClick = this.props.onClick;
    const zindex = this.props.zindex;  
    onClick(zindex);
  };

  render() {
    // const items = this.props.items
    console.log("this.props", this.props);

    const item = this.props.item;
    const onClick = this.props.onClick;
    // let className = "TodoItem";
    // if (items.isComplete) {
    //   className = className + " TodoItem-complete ";
    // }


    return (
      <div>
        <div
          onClick={this.handleClick}
          // onClick={() => onClick()}
          style={
            item.isComplete
              ? { textDecoration: " line-through", opacity: ".3" }
              : {}
          }
        >
          <imput > Nhập text </imput>
          <p>{item.title}</p>
        </div>
      </div>
    );
  }
}

// thuc thi ngay lap tuc onClick = () => {onclick();} || () => onClick()
// cho thuc thi ow tren || this.onClick || onClick

export default Test;

/**
 * 
 <div onClick = {onClick} className ={classNames('TodoItem',{
        'TodoItem-complete': items.isComplete
      })}>
        <p >{this.props.items.title}</p>
      </div>
 * 
*/
