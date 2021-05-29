import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../API";
import Util from "../../assets/utility/Utility";
import classes from "./RouteTrackerContent.module.css";

import ColorPicker from "./color_picker/ColorPicker";

import PageHeader from "../general/PageHeader/PageHeader";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../general/MapComponent/MapComponent";
import ComponentTable from "./comp_table/ComponentTable";
class RouteTrackerContent extends Component {
  state = {
    order_list: null,
    deli_order: null,
    all_location_list: [],
    err_msg: "",
    date_selected: Util.datetime_converter(new Date(), "-")
      .split(" ")[0]
      .split("-")
      .reverse()
      .join("-"),
  };

  renderOrderList = (res) => {
    const result = res.data;
    if (result.status.success === true) {
      const order_list = result.data.order;
      const deli_order_list = result.data.deli_order;

      const tmp_all_loc_list = [];
      if (order_list.length > 0) {
        order_list.forEach((e_order, index) => {
          const order_color = Util.get_color_by_index(index);
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
          const order_color = Util.get_color_by_index(index);
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
      this.setState({
        err_msg: result.status.description,
        order_list: null,
        deli_order_list: null,
        all_location_list: null,
      });
    }
  };

  dateChangeHandler = (event) => {
    const selected_date = event.target.value;
    this.setState({ date_selected: event.target.value });
    api
      .post("api", {
        api: "OrderAPI",
        method: "userGetOrderList",
        data: { date: selected_date },
      })
      .then(this.renderOrderList);
  };

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
    api
      .post("api", { api: "OrderAPI", method: "userGetOrderList", data: {} })
      .then(this.renderOrderList);
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
            <ColorPicker color={Util.get_color_by_index(index)} />
          </td>
          <td>{elem.route_id}</td>
          <td>{elem.node_num}</td>
          <td>{elem.distance} km.</td>
          <td>{(parseInt(elem.estimate_time) / 60).toFixed(2)} min.</td>
          <td className="hidexs">{Util.datetime_converter(elem.create_date)}</td>
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
    } else {
      tbody_order = (
        <tr>
          <td colSpan={7}> Route Not Found </td>
        </tr>
      );
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

    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/">
          &lt; Home Page
        </Link>
        <PageHeader headerTitle="Route Tracker" />

        <div className={classes.ContentBody}>
          <input
            type="date"
            style={{ marginBottom: 15 }}
            value={this.state.date_selected}
            onChange={this.dateChangeHandler}
          />
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
