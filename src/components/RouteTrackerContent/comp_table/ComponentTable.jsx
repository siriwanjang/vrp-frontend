import React, { Component } from "react";
import classes from "./ComponentTable.module.css";

class ComponentTable extends Component {
  state = {};
  render() {
    const th_elem = this.props.head.map((elem, index) => {
      let ret_elem;
      switch (elem.type) {
        case "text":
          ret_elem = (
            <th className={elem.text === "Create Date" ? "hidexs" : ""} key={index}>
              {elem.text}
            </th>
          );
          break;
        case "checkbox":
          ret_elem = (
            <th key={index}>
              <input type="checkbox" />
            </th>
          );
          break;
        default:
          ret_elem = <th key={index}></th>;
          break;
      }
      return ret_elem;
    });
    return (
      <table className={classes.TableStyle}>
        <thead>
          <tr>{th_elem}</tr>
        </thead>
        <tbody>{this.props.body}</tbody>
      </table>
    );
  }
}

export default ComponentTable;
