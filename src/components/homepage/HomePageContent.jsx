import React, { Component } from "react";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import { Link } from "react-router-dom";
import classes from "./HomePageContent.module.css";
import PageHeader from "../General/PageHeader/PageHeader";
class HomePageContent extends Component {
  state = {};
  render() {
    return (
      <InnerContainerHOC>
        <PageHeader headerTitle="Money Delivery" />

        <div className={classes.Section}>
          <h5 className={classes.SectionHeader}>Order Management</h5>
          <ul>
            <li>
              <Link to="order_tracker">Order Tracker</Link>
            </li>
            <li>
              <Link>Result</Link>
            </li>
          </ul>
        </div>
        <div className={classes.Section}>
          <h5 className={classes.SectionHeader}>Other Setting</h5>
          <ul>
            <li>
              <Link>Change Password</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default HomePageContent;
