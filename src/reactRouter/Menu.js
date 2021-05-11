import React, { Component } from "react";
import logoImg from "../components/images/logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import TodoListAll from "../components/TodoListAll";
import Service from "./Service";
import Disabled from "./Disabled";
import NotFound from "./NotFound";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                {/* Navbar */}
                <img className="logo" src={logoImg} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      //activeClassName="active"
                      exact
                      to="/"
                      className="nav-link active"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/service"
                      className="nav-link active"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/disabled"
                      className="nav-link active"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Disabled
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact strict path="/">
              <TodoListAll />
            </Route>
            <Route path="/service">
              <Service match={"/service"} />
            </Route>
            <Route path="/disabled">
              <Disabled />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Menu;
