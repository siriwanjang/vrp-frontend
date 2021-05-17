import React, { Component } from "react";
import Header from "../../components/general/header/Header";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";
import ResultContent from "../../components/ResultContent/ResultContent";
class ResultPage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        {/* <RouteDetailContent /> */}
        <ResultContent />
      </ContainerHOC>
    );
  }
}

export default ResultPage;
