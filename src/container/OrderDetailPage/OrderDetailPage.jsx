import React, { Component } from "react";
import Header from "../../components/general/header/Header";
import { Container } from "reactstrap";
import OrderDetailContent from "../../components/OrderDetailContent/OrderDetailContent";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";

class OrderDetailPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <Container>
          <OrderDetailContent />
        </Container>
      </ContainerHOC>
    );
  }
}

export default OrderDetailPage;
