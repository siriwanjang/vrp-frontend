import React, { Component } from "react";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";
import Header from "../../components/general/header/Header";
import RouteTrackerContent from "../../components/RouteTrackerContent/RouteTrackerContent";

class RouteTrackerPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <RouteTrackerContent />
      </ContainerHOC>
    );
  }
}

export default RouteTrackerPage;
