import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import classes from "./OrderTrackerContent.module.css";

import ColorPicker from "./color_picker/ColorPicker";

class HomeContent extends Component {
  state = {};

  render() {
    const test_data = [
      {
        order_id: "2021022701",
        node_count: 3,
        distance: 2500,
        estimate_time: 5400,
        order_create_date: "2021-02-27 15:23:48",
      },
      {
        order_id: "2021022702",
        node_count: 3,
        distance: 1800,
        estimate_time: 4500,
        order_create_date: "2021-02-27 15:25:13",
      },
      {
        order_id: "2021022703",
        node_count: 3,
        distance: 4000,
        estimate_time: 6600,
        order_create_date: "2021-02-27 15:27:52",
      },
    ];

    const tbody = test_data.map((elem, index) => (
      <tr key={elem.order_id} className={index % 2 === 0 ? classes.OddRow : null}>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <ColorPicker />
        </td>
        <td>{elem.order_id}</td>
        <td>{elem.node_count}</td>
        <td>{elem.distance}</td>
        <td>{elem.estimate_time}</td>
        <td>{elem.order_create_date}</td>
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

    const test_deli_data = [
      {
        order_id: "2021022701",
        node_count: 3,
        distance: 2500,
        estimate_time: 5400,
        order_create_date: "2021-02-27 15:23:48",
      },
      {
        order_id: "2021022702",
        node_count: 3,
        distance: 1800,
        estimate_time: 4500,
        order_create_date: "2021-02-27 15:25:13",
      },
      {
        order_id: "2021022703",
        node_count: 3,
        distance: 4000,
        estimate_time: 6600,
        order_create_date: "2021-02-27 15:27:52",
      },
    ];
    const deli_tbody = test_deli_data.map((elem, index) => (
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
    return (
      <Container
        style={{
          margin: "20px auto",
          backgroundColor: "white",
          overflow: "hidden",
          padding: "0 25px",
        }}
      >
        <div className={classes.ContentHeader}>
          Order Tracker
          <hr />
        </div>
        <div className={classes.ContentBody}>
          <input type="date" style={{ marginBottom: 15 }} />
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
          <div className={classes.OrderSectionHeader}>Order</div>
          <div className={classes.OrderSectionBody}>
            <div style={{ overflow: "hidden", borderRadius: 5 }}>
              <table className={classes.TableStyle}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Color</th>
                    <th>Order No.</th>
                    <th>Node</th>
                    <th>Distance</th>
                    <th>ETC.</th>
                    <th>Order Create Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{tbody}</tbody>
              </table>
            </div>
          </div>
          <div className={classes.OrderSectionHeader}>Delivering</div>
          <div className={classes.OrderSectionBody}>
            <div style={{ overflow: "hidden", borderRadius: 5 }}>
              <table className={classes.TableStyle}>
                <thead>
                  <tr>
                    <th>Order No.</th>
                    <th>Node</th>
                    <th>Distance</th>
                    <th>ETC.</th>
                    <th>Order Create Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{deli_tbody}</tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default HomeContent;
