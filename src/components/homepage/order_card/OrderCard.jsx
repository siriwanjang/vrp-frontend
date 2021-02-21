import React, { Component } from "react";
import { Button } from "reactstrap";

import car_icon from "../../../assets/image/icon/car-icon.png";

class OrderCard extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          border: "1px solid darkgrey",
          marginBottom: 20,
          display: "flex",
          padding: " 10px 20px",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "#FFD300",
            width: 70,
            height: 70,
            marginRight: 30,
          }}
        >
          <div style={{ textAlign: "center", marginTop: 8, fontWeight: "bold", color: "#6e5e5e" }}>
            No. 1
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={car_icon} style={{ width: "50%" }} />
          </div>
        </div>
        <div style={{ alignSelf: "center", marginRight: 30 }}>{"Depot >>"}</div>
        <div style={{ alignSelf: "center", marginRight: 30 }}>{"temp >>"}</div>
        <div style={{ alignSelf: "center", marginRight: 30 }}>{"temp >>"}</div>
        <div style={{ alignSelf: "center", marginRight: 30 }}>{"temp >>"}</div>
        <div style={{ alignSelf: "center", marginRight: 30 }}>{"Depot"}</div>
        <div style={{ alignSelf: "center", marginLeft: "auto" }}>
          <Button color="success"> Start</Button>
        </div>
      </div>
    );
  }
}

export default OrderCard;
