import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import RouteTrackerPage from "./container/RouteTrackerPage/RouteTrackerPage";
import OrderDetailPage from "./container/OrderDetailPage/OrderDetailPage";
import LoginPage from "./container/LoginPage/LoginPage";
import HomePage from "./container/HomePage/HomePage";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/route_tracker" exact component={RouteTrackerPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/route_detail" exact component={OrderDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
