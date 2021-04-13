import React, { Component } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);
    this.importRef = React.createRef();
    // debugger;
  }
  
  onClick = () => this.importRef.current.focus();
  render() {
    return (
      <div>
       <input ref={this.importRef} />
       <button onClick={this.onClick}> auto focus </button>
      </div>
    );
  }
}

export default Ref;
