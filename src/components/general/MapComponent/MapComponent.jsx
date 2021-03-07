import React, { Component } from "react";

class MapComponent extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: 480,
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
    );
  }
}

export default MapComponent;
