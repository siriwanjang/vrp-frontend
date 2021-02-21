import React, { Component } from "react";
import Header from "../../components/general/header/Header";
import HomeContent from "../../components/homepage/content_section/HomeContent";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#F2F2F2", overflow: "hidden" }}>
        <Header />
        <HomeContent />
      </div>
    );
  }
}

export default HomePage;
