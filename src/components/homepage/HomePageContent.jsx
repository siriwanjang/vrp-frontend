import React, { Component } from "react";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";
import classes from "./HomePageContent.module.css";
class HomePageContent extends Component {
  state = {};
  render() {
    return (
      <InnerContainerHOC>
        <div className={classes.ContentHeader}>
          Money Delivery
          <hr />
        </div>
        <div>
          <h5>Order Management</h5>
          <ul>
            <li>Order Tracker</li>
            <li>Result</li>
          </ul>
        </div>
        <div>
          <h5>Other Setting</h5>
          <ul>
            <li>Change Password</li>
            <li>Logout</li>
          </ul>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default HomePageContent;
