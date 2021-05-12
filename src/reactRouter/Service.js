import React, { Component, useState } from "react";
import Home from "./service/Home";
import Topics from "./service/Topics";
//----------- React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

//------------ Ant Design => npm install antd --save
import { Modal, Button } from "antd";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkPrompt: false,
      value: "",
      isNextPage: false,
      url: "",
      isModalVisible: false,
    };
  }
  onClick = (checkPrompt) => {
    this.setState({
      checkPrompt: checkPrompt,
    });
  };
  handleClick = (path) => {
    const { history } = this.props;
    console.log("history", history.location.pathname);
    if (history.location.pathname !== path) {
      this.setState({ isNextPage: true, url: path });
    }
  };
  handNextPage = () => {
    const { url } = this.state;
    const { history } = this.props;
    url && history.push(url);
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };
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
        {isNextPage && <button onClick={this.handNextPage}>OK cccc</button>}

        <div className="Modal">
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Bạn có muốn chuyển sang trang khác không ?.</p>
          </Modal>
        </div>
        <h1> Đây là trang Service</h1>
        <div>
          <ul>
            <li>
              <div
                onClick={() => this.handleClick("/service/Home-Service")}
                style={{ cursor: "pointer" }}
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => this.handleClick("/service/topics-Service")}
                style={{ cursor: "pointer" }}
              >
                Topics
              </div>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route
              exact
              path={`${match.path}/Home-Service`}
              children={<Home />}
            />

            <Route
              exact
              path={`${match.path}/topics-Service`}
              children={<Topics checkPrompt onClick={this.onClick} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(Service);
