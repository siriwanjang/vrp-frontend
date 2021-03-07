import React, { Component } from "react";
import classes from "./OrderDetailContent.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PageHeader from "../General/PageHeader/PageHeader";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../General/MapComponent/MapComponent";
import Section from "./section/Section";

class OrderDetailContent extends Component {
  state = {};
  render() {
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/order_tracker">
          &lt; Order Tracker
        </Link>
        <PageHeader headerTitle="Order Detail" />

        <MapComponent />
        <div>
          <div>
            <Button color="success">Start</Button>
          </div>

          <Section sectionTitle="Order Detail">
            <div style={{ marginLeft: 20 }}>Number Of Node</div>
            <div style={{ marginLeft: 20 }}>Estimate Distance</div>
            <div style={{ marginLeft: 20 }}>Estimate Time To Complete</div>
            <div style={{ marginLeft: 20 }}>Order Create Date</div>
          </Section>
          {/* Order Detail Section */}

          <Section sectionTitle="Location Detail">
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
          </Section>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default OrderDetailContent;
