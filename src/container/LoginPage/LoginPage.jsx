import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import classes from "./LoginPage.module.css";

import user_icon from "../../assets/image/icon/user-icon.png";
import pass_icon from "../../assets/image/icon/pass-icon.png";
import krungsri_logo from "../../assets/image/logo/logo-krungsri.png";

class LoginPage extends Component {
  state = {};
  inputChangeHandler = (event) => {
    console.log(event.target.name);
    const elem_target = event.target;
    this.setState({ [elem_target.name]: elem_target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div style={{ position: "relative", height: "100vh", width: "100%" }}>
        <form className={classes.DialogParent} onSubmit={this.submitHandler}>
          <div>
            <div style={{ top: 0 }}>
              <img src={krungsri_logo} style={{ width: 55 }} alt="" />
            </div>
            <div className={classes.FormGroup}>
              <div className={classes.LoginTextInput}>
                <div className={classes.ImageParent}>
                  <img src={user_icon} alt="" />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.inputChangeHandler}
                  required
                />
              </div>
              <div className={classes.LoginTextInput}>
                <div className={classes.ImageParent}>
                  <img src={pass_icon} alt="" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.inputChangeHandler}
                  required
                />
              </div>
              <div>
                <Link className={classes.RegisterLink} to="">
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className={classes.LoginButton}>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
