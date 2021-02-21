import React, { Component } from "react";
import { Container } from "reactstrap";
import OrderCard from "../order_card/OrderCard";
import classes from "./HomeContent.module.css";

class HomeContent extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          margin: "20px auto",
          backgroundColor: "white",
          overflow: "hidden",
          padding: "0 25px",
        }}
      >
        <div className={classes.ContentHeader}>
          Order Tracker
          <hr />
        </div>
        <div className={classes.ContentBody}>
          <input type="date" style={{ marginBottom: 15 }} />
          <div
            style={{
              height: 300,
              border: "1px solid darkgrey",
              position: "relative",
              marginBottom: 15,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              MAP
            </div>
          </div>
          <div className={classes.OrderSectionHeader}>Order</div>
          <div className={classes.OrderSectionBody}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </Container>
    );
  }
}

export default HomeContent;
