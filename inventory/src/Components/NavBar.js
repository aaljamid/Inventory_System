import React from "react";
import bootstrap from "bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from "./Inventory";
import Home from "./Home";

import axios from "axios";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    axios.get("http://worldtimeapi.org/api/ip").then(res => {
      console.log(res.data.datetime);
      const timeHr = new Date();
      console.log(timeHr);
      this.setState({ time: res.data.datetime });
    });
  }

  render() {
    return (
      <Router>
        <header>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                <img
                  src="data:image/png;base64,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"
                  width="50px"
                ></img>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/">
                      <a class="nav-link">
                        Home
                        <span class="sr-only">(current)</span>
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/inventory">
                      <a class="nav-link">Inventory</a>
                    </Link>
                  </li>
                </ul>
                <span class="navbar-text">Time is : {this.state.time} </span>
              </div>
            </nav>
          </div>

          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/inventory">
                <Inventory />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
    );
  }
}
