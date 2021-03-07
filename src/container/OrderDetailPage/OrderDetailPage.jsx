import React, { Component } from "react";
import Header from "../../components/General/header/Header";
import OrderDetailContent from "../../components/OrderDetailContent/OrderDetailContent";
import ContainerHOC from "../../components/General/ContainerHOC/ContainerHOC";

class OrderDetailPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <OrderDetailContent />
      </ContainerHOC>
    );
  }
}

export default OrderDetailPage;
