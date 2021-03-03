import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import OrderTracker from "./container/OrderTrackerPage/OrderTrackerPage";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/order_tracker" exact component={OrderTracker} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
