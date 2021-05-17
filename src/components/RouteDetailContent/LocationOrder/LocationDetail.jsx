import React, { Component } from "react";

class LocationDetail extends Component {
  state = {};
  render() {
    // console.log(this.props);
    const padd_betw_row = { paddingBottom: 15 };
    return (
      <div style={{ marginBottom: 20, position: "relative" }}>
        <div style={{ marginLeft: 20, marginBottom: 15, fontSize: 18 }}>
          <span
            style={{
              height: 20,
              width: 20,
              backgroundColor: "#F5B900",
              border: "1px solid #F5B900",
              borderRadius: "50%",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          ></span>
          {this.props.show_line === true ? (
            <div
              style={{
                borderLeft: "3px solid #F5B900",
                // height: 130,
                position: "absolute",
                left: 28,
                top: 6,
                bottom: -27,
              }}
            ></div>
          ) : null}
          {/* <span>{this.props.seq_num}.</span> */}
          <span style={{ marginLeft: 20, fontWeight: "bold" }}>{this.props.location_name}</span>
        </div>
        <table style={{ marginLeft: 80 }}>
          <tbody>
            <tr>
              <td style={{ ...padd_betw_row }}>Arrive at</td>
              <td
                style={{ paddingLeft: 25, fontWeight: "bold", color: "#F5B900", ...padd_betw_row }}
              >
                {this.props.arrive_at}
              </td>
            </tr>
            <tr>
              <td style={{ ...padd_betw_row }}>Depart at</td>
              <td
                style={{ paddingLeft: 25, fontWeight: "bold", color: "#F5B900", ...padd_betw_row }}
              >
                {this.props.depart_at}
              </td>
            </tr>
            <tr>
              <td style={{ ...padd_betw_row }}>Service Time</td>
              <td
                style={{ paddingLeft: 25, fontWeight: "bold", color: "#F5B900", ...padd_betw_row }}
              >
                {this.props.service_time}
              </td>
            </tr>
            <tr>
              <td style={{ ...padd_betw_row }}>Location Type</td>
              <td
                style={{ paddingLeft: 25, fontWeight: "bold", color: "#F5B900", ...padd_betw_row }}
              >
                {this.props.location_type}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LocationDetail;
