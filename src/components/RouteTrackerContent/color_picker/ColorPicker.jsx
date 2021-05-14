import React, { Component } from "react";
import { GithubPicker } from "react-color";
class ColorPicker extends Component {
  state = { bg_color: "#9a9a9a", open_picker: false };

  showColorPickerHandler = () => {
    this.setState({ open_picker: !this.state.open_picker });
  };
  handleClose = () => {
    this.setState({ open_picker: false });
  };
  changeColorHandler = (color) => {
    this.setState({ open_picker: false, bg_color: color.hex });
  };

  componentDidMount() {
    // console.log(this.props.color);
    this.setState({ bg_color: this.props.color });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 20,
            height: 20,
            border: "1px solid #9a9a9a",
            margin: "auto",
            backgroundColor: this.state.bg_color,
            cursor: "pointer",
          }}
          // onClick={this.showColorPickerHandler}
        ></div>
        {this.state.open_picker ? (
          <div style={{ position: "absolute", zIndex: 2, left: 36, top: 27 }}>
            <div
              style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }}
              onClick={this.handleClose}
            />
            <GithubPicker onChange={this.changeColorHandler} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
