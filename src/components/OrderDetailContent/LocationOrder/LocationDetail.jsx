import React, { Component } from "react";

class LocationDetail extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginLeft: 20, fontSize: 18 }}>
          <span>{this.props.seq_num}.</span>
          <span style={{ marginLeft: 20, fontWeight: "bold" }}>{this.props.location_name}</span>
        </div>
        <table style={{ marginLeft: 40 }}>
          <tr>
            <td>Arrive at</td>
            <td style={{ paddingLeft: 25 }}>{this.props.arrive_at}</td>
          </tr>
          <tr>
            <td>Depart at</td>
            <td style={{ paddingLeft: 25 }}>{this.props.depart_at}</td>
          </tr>
          <tr>
            <td>Service Time</td>
            <td style={{ paddingLeft: 25 }}>{this.props.service_time}</td>
          </tr>
          <tr>
            <td>Location Type</td>
            <td style={{ paddingLeft: 25 }}>{this.props.location_type}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default LocationDetail;
