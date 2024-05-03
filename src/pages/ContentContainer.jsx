import React, { Component } from "react";
import classNames from "classnames";

import "../css/MyContainer.css";

export default class ContenContainer extends Component {
  render() {
    const className = classNames("header-content-container", this.props.className);

    return <div className={className}>
       {this.props.children}
    </div>;
  }
}
