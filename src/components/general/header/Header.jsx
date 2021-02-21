import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import krungsri_logo from "../../../assets/image/logo/logo-krungsri.png";
import nav_user_icon from "../../../assets/image/icon/nav-user-icon.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={classes.Header}>
          <div className={classes.NavBrand}>
            <img src={krungsri_logo} alt="" />
          </div>
          <Link className={classes.NavItem}>
            <span>Home</span>
          </Link>
          <Link className={classes.NavItem}>
            <span>Result</span>
          </Link>
          <div className={[classes.RightNav, classes.UserItem].join(" ")}>
            <img src={nav_user_icon} alt="" />
            <span>Username</span>
          </div>
        </div>
        <div className={classes.HeaderReservedSpace}></div>
      </div>
    );
  }
}

export default Header;
