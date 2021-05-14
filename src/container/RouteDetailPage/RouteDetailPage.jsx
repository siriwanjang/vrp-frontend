import React, { Component } from "react";
import Header from "../../components/General/header/Header";
import RouteDetailContent from "../../components/RouteDetailContent/RouteDetailContent";
import ContainerHOC from "../../components/General/ContainerHOC/ContainerHOC";

class RouteDetailPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <RouteDetailContent />
      </ContainerHOC>
    );
  }
}

export default RouteDetailPage;
