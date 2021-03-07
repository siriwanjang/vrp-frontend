import React, { Component } from "react";
import classes from "./ComponentTable.module.css";

class ComponentTable extends Component {
  state = {};
  render() {
    console.log(this.props.head);
    const th_elem = this.props.head.map((elem) => {
      switch (elem.type) {
        case "text":
          return <th>{elem.text}</th>;
        case "checkbox":
          return (
            <th>
              <input type="checkbox" />
            </th>
          );
        default:
          break;
      }
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
