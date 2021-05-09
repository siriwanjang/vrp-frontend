import React, { Component } from "react";
// import classes from "./OrderDetailContent.module.css";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";
import { Button } from "reactstrap";
import PageHeader from "../General/PageHeader/PageHeader";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../General/MapComponent/MapComponent";
import Section from "./section/Section";

import api from "../../API";

class OrderDetailContent extends Component {
  state = {
    number_of_node: 0,
    total_distance: 0,
    total_time: 0,
    order_create_date: "",
    all_location_list: [],
  };

  componentDidMount() {
    // console.log();
    const route_id = queryString.parse(this.props.location.search).route_id;
    api
      .post("api", {
        api: "OrderAPI",
        method: "userGetOrderInfo",
        data: {
          route_id: route_id,
        },
      })
      .then((res) => {
        const result = res.data;
        // console.log(result);
        if (result.status.success === true) {
          const res_data = result.data;
          const route_info = res_data.route_info;
          console.log(route_info);
          this.setState({
            number_of_node: route_info.node_num,
            total_distance: route_info.distance,
            total_time: route_info.estimate_time,
            order_create_date: route_info.create_date,
            all_location_list: [
              {
                route_id: route_info.route_id,
                color: "#480D6D",
                location_list: route_info.location_list,
                is_show: true,
              },
            ],
          });
        }
      });
  }
  render() {
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/order_tracker">
          &lt; Order Tracker
        </Link>
        <PageHeader headerTitle="Order Detail" />

        <MapComponent all_location_list={this.state.all_location_list} />
        <div>
          <div>
            <Button color="success">Start</Button>
          </div>

          <Section sectionTitle="Order Detail">
            <table style={{ marginLeft: 20 }}>
              <tbody>
                <tr>
                  <td>Number Of Node</td>
                  <td style={{ paddingLeft: 20 }}>{this.state.number_of_node}</td>
                </tr>
                <tr>
                  <td>Estimate Distance</td>
                  <td style={{ paddingLeft: 20 }}>{this.state.total_distance}</td>
                </tr>
                <tr>
                  <td>Estimate Time To Complete</td>
                  <td style={{ paddingLeft: 20 }}>{this.state.total_time}</td>
                </tr>
                <tr>
                  <td>Order Create Date</td>
                  <td style={{ paddingLeft: 20 }}>{this.state.order_create_date}</td>
                </tr>
              </tbody>
            </table>
          </Section>
          {/* Order Detail Section */}

          <Section sectionTitle="Location Detail">
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
            <div>
              <div style={{ marginLeft: 20 }}>
                1. from <strong>Depot</strong> to <strong>Location Placeholder number 1</strong>
              </div>
              <div style={{ marginLeft: 40 }}>Distance </div>
              <div style={{ marginLeft: 40 }}>Estimate Time Arrival</div>
            </div>
          </Section>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default withRouter(OrderDetailContent);
