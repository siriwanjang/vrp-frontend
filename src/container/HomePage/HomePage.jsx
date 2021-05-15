import React, { Component } from "react";
import ContainerHOC from "../../components/general/ContainerHOC/ContainerHOC";
import Header from "../../components/general/header/Header";
import HomePageContent from "../../components/homepage/HomePageContent";
import Cookies from "universal-cookie";
import { Redirect } from "react-router";
// import api from "../../API";

// import HomeContent from "../../components/homepage/content_section/HomeContent";
class HomePage extends Component {
  state = { is_login: false };
  componentDidMount() {
    const cookies = new Cookies();
    const is_logged_in = cookies.get("logged_in") === "1";
    if (is_logged_in === false) {
      this.setState({ is_login: true });
    }
  }
  render() {
    const { is_login } = this.state;
    if (is_login) {
      return <Redirect to="/login" />;
    }
    return (
      <ContainerHOC>
        <Header />
        <HomePageContent />
      </ContainerHOC>
    );
  }
}

export default HomePage;
