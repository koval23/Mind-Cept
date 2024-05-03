import React, { Component } from "react";
import "../css/MyContainer.css";

export default class MyContainer extends Component {
  render() {
    return <div className="header-container">{this.props.children}</div>;
  }
}
