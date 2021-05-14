import React, { Component } from "react";
// import classes from "./OrderDetailContent.module.css";
import queryString from "query-string";
import { Link, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import PageHeader from "../General/PageHeader/PageHeader";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../General/MapComponent/MapComponent";
import Section from "./section/Section";

import api from "../../API";
import LocationDetail from "./LocationOrder/LocationDetail";

class OrderDetailContent extends Component {
  state = {
    number_of_node: 0,
    total_distance: 0,
    total_time: 0,
    order_create_date: "",
    all_location_list: undefined,
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
          // console.log(route_info);
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
    let location_elem = [];
    // console.log("all_location_list", );
    if (typeof this.state.all_location_list === "object") {
      const location_list = this.state.all_location_list[0].location_list;
      location_list.sort((a, b) => a.sequence - b.sequence);
      console.log(location_list);
      location_elem = location_list.map((e_loc, index) => (
        <LocationDetail
          seq_num={index + 1}
          location_name={e_loc.location.location_name}
          arrive_at={e_loc.arrive_time}
          depart_at={e_loc.depart_time}
          service_time={e_loc.service_time}
          location_type={e_loc.location.location_type}
        />
      ));
      const route_list = [];
      location_list.forEach((e_loc, index) => {
        // console.log(e_loc, index);
        if (index !== 0 && index != location_list.length - 1) {
          route_list.push(e_loc);
        }
        route_list.push(e_loc);

        // console.log(e_loc);
      });
      for (let i = 0; i < route_list.length / 2; i++) {
        const location_1 = route_list[i * 2].location;
        const location_2 = route_list[i * 2 + 1].location;
        // console.log(i, location_1.location_name, location_2.location_name);
        let test = `${i + 1}. from ${location_1.location_name} to ${location_2.location_name}`;
        console.log(test);
        // console.log(i * 2, i * 2 + 1);
      }
    }
    // this.state.all_location_list[0].location_list.forEach((elem, index) => {
    //   console.log(elem.location_list);
    // });
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/order_tracker">
          &lt; Route Tracker
        </Link>
        <PageHeader headerTitle="Route Detail" />

        <MapComponent all_location_list={this.state.all_location_list} />
        <div style={{ paddingBottom: 50 }}>
          <div>
            <Button color="success">Start</Button>
          </div>

          <Section sectionTitle="Route Detail">
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

          <Section sectionTitle="Location Detail">{location_elem}</Section>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default withRouter(OrderDetailContent);
