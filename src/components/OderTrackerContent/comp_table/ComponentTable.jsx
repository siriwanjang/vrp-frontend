import React, { Component } from "react";
import classes from "./ComponentTable.module.css";

class ComponentTable extends Component {
  state = {};
  render() {
    const th_elem = this.props.head.map((elem) => {
      let ret_elem;
      switch (elem.type) {
        case "text":
          ret_elem = <th>{elem.text}</th>;
          break;
        case "checkbox":
          ret_elem = (
            <th>
              <input type="checkbox" />
            </th>
          );
          break;
        default:
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
