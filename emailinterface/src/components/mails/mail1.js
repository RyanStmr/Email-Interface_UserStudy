import React, { Component } from "react";
import pic from "./mail1.jpg";

class Mail1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={pic}></img>
      </React.Fragment>
    );
  }
}

Mail1.defaultProps = {
  sender: "win@domain.com",
  date: "23.09.2029 19:12",
  subject: "Relog - Windows1",
  capital: "H",
};

export default Mail1;
