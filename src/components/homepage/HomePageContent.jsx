import React, { Component } from "react";
import { Container } from "reactstrap";
import classes from "./HomePageContent.module.css";
class HomePageContent extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          margin: "20px auto",
          backgroundColor: "white",
          overflow: "hidden",
          padding: "0 25px",
        }}
      >
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
      </Container>
    );
  }
}

export default HomePageContent;
