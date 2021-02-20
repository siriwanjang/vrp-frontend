import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from "./container/HomePage/HomePage";
import LoginPage from "./container/LoginPage/LoginPage";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
