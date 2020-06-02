import React, { Component } from "react";
import pic from "./mail1.jpg";

class Mail1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>This is a Mail Component</h1>
        <img src={pic}></img>
      </React.Fragment>
    );
  }
}

export default Mail1;
