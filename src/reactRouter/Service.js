import React, { Component } from "react";
import Home from "./service/Home";
import Topics from "./service/Topics";
//----------- React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkPrompt: false,
      value: "",
    };
  }
  onClick = (checkPrompt) => {
    debugger;
    this.setState({
      checkPrompt: checkPrompt,
    });
  };
  render() {
    const { match } = this.props;
    const { checkPrompt } = this.state;
    return (
      <div className="Service">
        <h1> Đây là trang Service</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to={`${match}/Home-Service`}>Home</Link>
              </li>
              <li>
                <Link to={`${match}/topics-Service`}>Topics</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path={`${match}/Home-Service`}>
                <Home />
              </Route>
              <Route path={`${match}/topics-Service`}>
                <Topics checkPrompt onClick={this.onClick} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Service;
