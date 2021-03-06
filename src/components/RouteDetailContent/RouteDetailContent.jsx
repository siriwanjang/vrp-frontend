import React, { Component } from "react";
// import classes from "./OrderDetailContent.module.css";
import queryString from "query-string";
import { Link, withRouter } from "react-router-dom";
import PageHeader from "../general/PageHeader/PageHeader";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../general/MapComponent/MapComponent";
import Section from "./section/Section";
import LocationDetail from "./LocationOrder/LocationDetail";

import api from "../../API";
import Util from "../../assets/utility/Utility";
class RouteDetailContent extends Component {
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
            order_create_date: Util.datetime_converter(route_info.create_date),
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
    const padd_betw_row = { paddingBottom: 5 };

    let location_elem = [];
    // console.log("all_location_list", );
    if (typeof this.state.all_location_list === "object") {
      const location_list = this.state.all_location_list[0].location_list;
      location_list.sort((a, b) => a.sequence - b.sequence);
      // console.log(location_list);
      location_elem = location_list.map((e_loc, index) => (
        <LocationDetail
          key={index}
          seq_num={index + 1}
          location_name={e_loc.location.location_name}
          arrive_at={Util.datetime_converter(e_loc.arrive_time)}
          depart_at={Util.datetime_converter(e_loc.depart_time)}
          service_time={e_loc.service_time}
          location_type={e_loc.location.location_type}
          show_line={index !== location_list.length - 1}
        />
      ));
    }
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/route_tracker">
          &lt; Route Tracker
        </Link>
        <PageHeader headerTitle="Route Detail" />

        <MapComponent all_location_list={this.state.all_location_list} />
        <div style={{ paddingBottom: 50 }}>
          {/* <div>
            <Button color="success">Start</Button>
          </div> */}

          <Section
            sectionTitle="Route Detail"
            add_style={{ backgroundColor: "rgb(248 248 248)", borderRadius: 10, padding: 20 }}
          >
            <table style={{ marginLeft: 20 }}>
              <tbody>
                <tr>
                  <td style={{ ...padd_betw_row }}>Number Of Node</td>
                  <td
                    style={{
                      paddingLeft: 20,
                      fontWeight: "bold",
                      color: "#F5B900",
                      ...padd_betw_row,
                    }}
                  >
                    {this.state.number_of_node}
                  </td>
                </tr>
                <tr>
                  <td style={{ ...padd_betw_row }}>Estimate Distance</td>
                  <td
                    style={{
                      paddingLeft: 20,
                      fontWeight: "bold",
                      color: "#F5B900",
                      ...padd_betw_row,
                    }}
                  >
                    {this.state.total_distance}
                  </td>
                </tr>
                <tr>
                  <td style={{ ...padd_betw_row }}>Estimate Time To Complete</td>
                  <td
                    style={{
                      paddingLeft: 20,
                      fontWeight: "bold",
                      color: "#F5B900",
                      ...padd_betw_row,
                    }}
                  >
                    {this.state.total_time}
                  </td>
                </tr>
                <tr>
                  <td style={{ ...padd_betw_row }}>Order Create Date</td>
                  <td
                    style={{
                      paddingLeft: 20,
                      fontWeight: "bold",
                      color: "#F5B900",
                      ...padd_betw_row,
                    }}
                  >
                    {this.state.order_create_date}
                  </td>
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

export default withRouter(RouteDetailContent);
