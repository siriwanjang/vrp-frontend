import React, { Component } from "react";
import classes from "./OrderDetailContent.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PageHeader from "../general/PageHeader/PageHeader";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";

class OrderDetailContent extends Component {
  state = {};
  render() {
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/order_tracker">
          &lt; Order Tracker
        </Link>
        <PageHeader headerTitle="Order Detail" />

        <div
          style={{
            height: 480,
            border: "1px solid darkgrey",
            position: "relative",
            marginBottom: 15,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            MAP
          </div>
        </div>
        <div>
          <div>
            <Button color="success">Start</Button>
          </div>
          {/* Order Detail Section */}
          <div style={{ marginTop: 20 }}>
            <h4>Order Detail</h4>
            <div style={{ marginLeft: 20 }}>Number Of Node</div>
            <div style={{ marginLeft: 20 }}>Estimate Distance</div>
            <div style={{ marginLeft: 20 }}>Estimate Time To Complete</div>
            <div style={{ marginLeft: 20 }}>Order Create Date</div>
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Location Detail</h4>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to{" "}
                <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to{" "}
                <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to{" "}
                <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
          </div>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default OrderDetailContent;
