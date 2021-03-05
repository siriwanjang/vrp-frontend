import React, { Component } from "react";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";
import Header from "../../components/general/header/Header";
import HomePageContent from "../../components/homepage/HomePageContent";

// import HomeContent from "../../components/homepage/content_section/HomeContent";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <ContainerHOC>
        <Header />
        <HomePageContent />
      </ContainerHOC>
    );
  }
}

export default HomePage;
