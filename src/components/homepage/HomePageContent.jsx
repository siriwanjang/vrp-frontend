import React, { Component } from "react";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";
import { Link, Redirect } from "react-router-dom";
import classes from "./HomePageContent.module.css";
import PageHeader from "../general/PageHeader/PageHeader";
import Cookies from "universal-cookie";
class HomePageContent extends Component {
  state = { is_logout: false };
  logoutHandler = (event) => {
    const cookies = new Cookies();
    cookies.remove("logged_in");
    console.log("logout");
    this.setState({ is_logout: true });
  };
  render() {
    const { is_logout } = this.state;
    if (is_logout === true) {
      return <Redirect to="/login" />;
    }
    return (
      <InnerContainerHOC>
        <PageHeader headerTitle="Money Delivery" />

        <div className={classes.Section}>
          <h5 className={classes.SectionHeader}>Order Management</h5>
          <ul>
            <li>
              <Link to="route_tracker">Route Tracker</Link>
            </li>
            <li>
              <Link to="#">Result</Link>
            </li>
          </ul>
        </div>
        <div className={classes.Section}>
          <h5 className={classes.SectionHeader}>Other Setting</h5>
          <ul>
            <li>
              <Link to="#">Change Password</Link>
            </li>
            <li>
              <Link to="#" onClick={this.logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default HomePageContent;
