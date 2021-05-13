import React, { Component, useState } from "react";
import Home from "./service/Home";
import Topics from "./service/Topics";
//----------- React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //withRouter,
} from "react-router-dom";

//------------ Ant Design => npm install antd --save
import { Modal, Button } from "antd";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNextPage: false,
      url: "",
      isModalVisible: false,
    };
  }

  handleClick = () => {};

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { match } = this.props;
    const { isNextPage, isModalVisible } = this.state;
    return (
      <div className="Service">
        {isNextPage && (
          <div className="Modal">
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Bạn có muốn chuyển sang trang khác không ?.</p>
            </Modal>
          </div>
        )}
        <h1> Đây là trang Service</h1>
        <div>
          <ul>
            <li>
              <div
                onClick={() => this.handleClick("/service/Home-Service")}
                style={{ cursor: "pointer" }}
              >
                <Link to={`${match}/Home-Service`} onClick={this.handleClick}>
                  Home
                </Link>
              </div>
            </li>
            <li>
              <Link to={`${match}/topics-Service`} onClick={this.handleClick}>
                Topics
              </Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path={`${match}/Home-Service`} children={<Home />} />
            <Route path={`${match}/topics-Service`} children={<Topics />} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Service;
// withRouter( )
