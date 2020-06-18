import React, { Component } from "react";
import pic from "./mail1.jpg";

class Mail1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment style={{ width: "20px" }}>
        <h2>{this.props.userName}</h2>
        <h2>{this.props.emailAdress}</h2>
        <img src={pic}></img>
      </React.Fragment>
    );
  }
}

export default Mail1;
