import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import api from "../../API";
// import axios

import classes from "./LoginPage.module.css";

import user_icon from "../../assets/image/icon/user-icon.png";
import pass_icon from "../../assets/image/icon/pass-icon.png";
import krungsri_logo from "../../assets/image/logo/logo-krungsri.png";

class LoginPage extends Component {
  state = { red_to_homepage: false, login_error_text: "", login_error: false };
  inputChangeHandler = (event) => {
    const elem_target = event.target;
    this.setState({ [elem_target.name]: elem_target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    const cookies = new Cookies();

    api
      .post("/api", {
        api: "UserAPI",
        method: "userLogin",
        data: { username: username, password: password },
      })
      .then((res) => {
        const result = res.data;
        if (result.status.success === true) {
          // console.log(result);
          cookies.set("logged_in", "1", { path: "/" });
          this.setState({ red_to_homepage: true });
        } else {
          let error_msg = "";
          switch (result.status.description) {
            case "UserAPIUserAPI_userLogin_InvalidUsernamePassword":
              error_msg = "Invalid Username or Password";
              break;
            default:
              error_msg = "Invalid Username or Password";
              break;
          }
          this.setState({ login_error_text: error_msg, login_error: true });
        }
      });
  };

  componentDidMount() {
    const cookies = new Cookies();
    const is_login = cookies.get("logged_in") === "1";
    console.log(is_login);
    if (is_login === true) {
      this.setState({ red_to_homepage: true });
    }
  }

  render() {
    if (this.state.red_to_homepage) {
      return <Redirect to="/" />;
    }
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
              <div>
                {this.state.login_error ? (
                  <span style={{ color: "red" }}>{this.state.login_error_text}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={classes.LoginButton}
              // onClick={() => {
              //   window.location.href = "/";
              // }}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
