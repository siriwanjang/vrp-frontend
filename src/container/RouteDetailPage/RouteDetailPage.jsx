import React, { Component } from "react";
import Header from "../../components/general/header/Header";
import RouteDetailContent from "../../components/RouteDetailContent/RouteDetailContent";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";

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
