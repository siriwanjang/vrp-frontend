import React, { Component } from "react";
import Header from "../../components/general/header/Header";
import OrderTrackerContent from "../../components/OderTrackerContent/OrderTrackerContent";
class OrderTrackerPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#F2F2F2", overflow: "hidden" }}>
        <Header />
        <OrderTrackerContent />
      </div>
    );
  }
}

export default OrderTrackerPage;
