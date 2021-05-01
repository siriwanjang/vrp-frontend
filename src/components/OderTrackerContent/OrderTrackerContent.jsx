import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../API";

import classes from "./OrderTrackerContent.module.css";

import ColorPicker from "./color_picker/ColorPicker";

import PageHeader from "../General/PageHeader/PageHeader";
import InnerContainerHOC from "../General/InnerContainerHOC/InnerContainerHOC";
import MapComponent from "../General/MapComponent/MapComponent";
import ComponentTable from "./comp_table/ComponentTable";
class OrderTrackerContent extends Component {
  state = { order_list: null, deli_order: null, all_location_list: [] };

  componentDidMount() {
    api.post("api", { api: "OrderAPI", method: "userGetOrderList" }, {}).then((res) => {
      const result = res.data;
      // console.log(result);
      if (result.status.success === true) {
        // console.log(result.data);
        const order_list = result.data.order;
        const deli_order_list = result.data.deli_order;
        const tmp_all_loc_list = [];
        if (order_list.length > 0) {
          for (let e_order of order_list) {
            tmp_all_loc_list.push(...e_order.location_list);
            // console.log(e_order.location_list);
          }
        }
        if (deli_order_list.length > 0) {
          for (let e_order of deli_order_list) {
            tmp_all_loc_list.push(...e_order.location_list);
            // console.log(e_order.location_list);
          }
        }
        // console.log(tmp_all_loc_list);
        this.setState({
          order_list: result.data.order,
          deli_order_list: result.data.deli_order,
          all_location_list: tmp_all_loc_list,
        });
      } else {
      }
    });
  }

  render() {
    const { order_list, deli_order_list } = this.state;

    let tbody_order = null;
    if (Array.isArray(order_list) === true) {
      tbody_order = order_list.map((elem, index) => (
        <tr key={elem.order_id} className={index % 2 === 0 ? classes.OddRow : null}>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <ColorPicker />
          </td>
          <td>{elem.order_id}</td>
          <td>{elem.node_num}</td>
          <td>{elem.distance}</td>
          <td>{elem.estimate_time}</td>
          <td>{elem.create_date}</td>
          <td>
            <Link to="/order_detail">
              <button
                style={{
                  backgroundColor: "#6E5E5E",
                  color: "white",
                  border: "1px solid #6E5E5E",
                  padding: "3px 10px",
                }}
                // onClick=>
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
        <tr key={elem.order_id} className={index % 2 === 0 ? classes.OddRow : null}>
          <td>{elem.order_id}</td>
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
        <PageHeader headerTitle="Order Tracker" />

        <div className={classes.ContentBody}>
          <input type="date" style={{ marginBottom: 15 }} />
          <MapComponent all_location_list={this.state.all_location_list} />
          <div className={classes.OrderSectionHeader}>Order</div>
          <div className={classes.OrderSectionBody}>
            <div style={{ overflow: "hidden", borderRadius: 5 }}>
              <ComponentTable
                head={[
                  { type: "checkbox", text: "" },
                  { type: "text", text: "Color" },
                  { type: "text", text: "Order No." },
                  { type: "text", text: "Node" },
                  { type: "text", text: "Distance" },
                  { type: "text", text: "ETC." },
                  { type: "text", text: "Order Create Date" },
                  { type: "text", text: "" },
                ]}
                body={tbody_order}
              />
            </div>
          </div>
          <div className={classes.OrderSectionHeader}>Delivering</div>
          <div className={classes.OrderSectionBody}>
            <div style={{ overflow: "hidden", borderRadius: 5 }}>
              <ComponentTable
                head={[
                  { type: "text", text: "Order No." },
                  { type: "text", text: "Node" },
                  { type: "text", text: "Distance" },
                  { type: "text", text: "ETC." },
                  { type: "text", text: "Order Create Date" },
                  { type: "text", text: "" },
                ]}
                body={deli_tbody}
              />
            </div>
          </div>
        </div>
      </InnerContainerHOC>
    );
  }
}

export default OrderTrackerContent;
