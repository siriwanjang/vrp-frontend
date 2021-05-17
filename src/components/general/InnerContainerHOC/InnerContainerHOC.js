import React from "react";
import { Container } from "reactstrap";

const InnerContainerHOC = (props) => (
  <Container
    style={{
      margin: "20px auto",
      backgroundColor: "white",
      overflow: "hidden",
      padding: "0 25px",
      minHeight: "86vh",
    }}
  >
    {props.children}
  </Container>
);

export default InnerContainerHOC;
