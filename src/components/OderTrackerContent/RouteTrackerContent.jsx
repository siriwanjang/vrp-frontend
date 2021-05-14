import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../API";
import Util from "../../assets/utility/Utility";
import classes from "./RouteTrackerContent.module.css";

import ColorPicker from "./color_picker/ColorPicker";

import PageHeader from "../General/PageHeader/PageHeader";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../General/MapComponent/MapComponent";
import ComponentTable from "./comp_table/ComponentTable";
class RouteTrackerContent extends Component {
  state = { order_list: null, deli_order: null, all_location_list: [] };

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  orderSelectHandler = (event) => {
    const all_location_list = [...this.state.all_location_list];
    // console.log(all_location_list);
    const is_check = event.target.checked;
    const order_id = event.target.getAttribute("data-order-id");
    // console.log(is_check, order_id);
    // console.log(all_location_list);
    const order_index = all_location_list.findIndex((elem) => elem.route_id == order_id);
    // console.log(order_index);
    all_location_list[order_index].is_show = is_check;
    this.setState({ all_location_list: all_location_list });
  };

  componentDidMount() {
    api.post("api", { api: "OrderAPI", method: "userGetOrderList" }, {}).then((res) => {
      const result = res.data;
      // console.log(res);
      if (result.status.success === true) {
        // console.log(result.data);
        const order_list = result.data.order;
        const deli_order_list = result.data.deli_order;

        const tmp_all_loc_list = [];
        if (order_list.length > 0) {
          order_list.forEach((e_order, index) => {
            const order_color = this.getRandomColor();
            order_list[index].color = order_color;
            tmp_all_loc_list.push({
              route_id: e_order.route_id,
              color: order_list[index].color,
              location_list: e_order.location_list,
              is_show: false,
            });
            // console.log(e_order.location_list);
          });
        }
        if (deli_order_list.length > 0) {
          deli_order_list.forEach((e_order, index) => {
            const order_color = this.getRandomColor();
            deli_order_list[index].color = order_color;
            tmp_all_loc_list.push({
              route_id: e_order.route_id,
              color: deli_order_list[index].color,
              location_list: e_order.location_list,
              is_show: false,
            });
            // console.log(e_order.location_list);
          });
        }
        // console.log(order_list, deli_order_list);
        this.setState({
          order_list: order_list,
          deli_order_list: deli_order_list,
          all_location_list: tmp_all_loc_list,
        });
      } else {
      }
    });
    // setTimeout(() => {
    //   this.setState({ order_list: null, all_location_list: [] });
    // }, 5000);
  }

  render() {
    const { order_list, deli_order_list } = this.state;

    let tbody_order = null;
    if (Array.isArray(order_list) === true) {
      tbody_order = order_list.map((elem, index) => (
        <tr key={elem.route_id} className={index % 2 === 0 ? classes.OddRow : null}>
          <td>
            <input
              type="checkbox"
              data-order-id={elem.route_id}
              onChange={this.orderSelectHandler}
            />
          </td>
          <td>
            <ColorPicker color={elem.color} />
          </td>
          <td>{elem.route_id}</td>
          <td>{elem.node_num}</td>
          <td>{elem.distance}</td>
          <td>{elem.estimate_time}</td>
          <td>{Util.datetime_converter(elem.create_date)}</td>
          <td>
            <Link to={`/route_detail?route_id=${elem.route_id}`}>
              <button
                style={{
                  backgroundColor: "#6E5E5E",
                  color: "white",
                  border: "1px solid #6E5E5E",
                  padding: "3px 10px",
                }}
              >
                VIEW
              </button>
            </Link>
          </td>
        </tr>
      ));
    }
    // console.log(deli_order_list);

    let deli_tbody;
    if (Array.isArray(deli_order_list) === true) {
      deli_tbody = deli_order_list.map((elem, index) => (
        <tr key={elem.route_id} className={index % 2 === 0 ? classes.OddRow : null}>
          <td>{elem.route_id}</td>
          <td>{elem.node_count}</td>
          <td>{elem.distance}</td>
          <td>{elem.estimate_time}</td>
          <td>{elem.order_create_date}</td>
          <td>
            <button
              style={{
                backgroundColor: "#6E5E5E",
                color: "white",
                border: "1px solid #6E5E5E",
                padding: "3px 10px",
              }}
            >
              VIEW
            </button>
          </td>
        </tr>
      ));
    }

    // console.log(deli_tbody);

    return (
      <InnerContainerHOC>
        <PageHeader headerTitle="Route Tracker" />

        <div className={classes.ContentBody}>
          <input type="date" style={{ marginBottom: 15 }} />
          <MapComponent all_location_list={this.state.all_location_list} />
          <div className={classes.OrderSectionHeader}>Route</div>
          <div className={classes.OrderSectionBody}>
            <div>
              <ComponentTable
                head={[
                  { type: "", text: "" },
                  { type: "text", text: "Color" },
                  { type: "text", text: "Route No." },
                  { type: "text", text: "Node" },
                  { type: "text", text: "Distance" },
                  { type: "text", text: "ETC." },
                  { type: "text", text: "Create Date" },
                  { type: "text", text: "" },
                ]}
                body={tbody_order}
              />
            </div>
          </div>
          {/* <div className={classes.OrderSectionHeader}>Delivering</div>
          <div className={classes.OrderSectionBody}>
            <div>
              <ComponentTable
                head={[
                  { type: "text", text: "Route No." },
                  { type: "text", text: "Node" },
                  { type: "text", text: "Distance" },
                  { type: "text", text: "ETC." },
                  { type: "text", text: "Route Create Date" },
                  { type: "text", text: "" },
                ]}
                body={deli_tbody}
              />
            </div>
          </div> */}
        </div>
      </InnerContainerHOC>
    );
  }
}

export default RouteTrackerContent;
