import React, { Component } from "react";
import ContainerHOC from "../../components/General/ContainerHOC/ContainerHOC";
import Header from "../../components/General/header/Header";
import OrderTrackerContent from "../../components/OderTrackerContent/OrderTrackerContent";

class OrderTrackerPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <OrderTrackerContent />
      </ContainerHOC>
    );
  }
}

export default OrderTrackerPage;
