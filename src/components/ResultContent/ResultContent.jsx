import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../API";
import Util from "../../assets/utility/Utility";
import classes from "./ResultContent.module.css";

import PageHeader from "../general/PageHeader/PageHeader";
import InnerContainerHOC from "../general/InnerContainerHOC/InnerContainerHOC";
// import ComponentTable from "./comp_table/ComponentTable";
import ComponentTable from "./comp_table/ComponentTable";
class ResultContent extends Component {
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

  render() {
    const tbody_order = (
      <tr>
        <td colSpan={6}> Result Not Found </td>
      </tr>
    );
    return (
      <InnerContainerHOC>
        <Link style={{ color: "lightgray" }} to="/">
          &lt; Home Page
        </Link>
        <PageHeader headerTitle="Result" />

        <div className={classes.ContentBody}>
          <input
            type="date"
            style={{ marginBottom: 15 }}
            value={this.state.date_selected}
            onChange={this.dateChangeHandler}
          />
          <div className={classes.OrderSectionHeader}>Route</div>
          <div className={classes.OrderSectionBody}>
            <div>
              <ComponentTable
                head={[
                  { type: "", text: "" },
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
        </div>
      </InnerContainerHOC>
    );
  }
}

export default ResultContent;
