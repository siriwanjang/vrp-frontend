import React, { Component } from "react";
import ContainerHOC from "../../components/General/ContainerHOC/ContainerHOC";
import Header from "../../components/General/header/Header";
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
