import React, { Component } from "react";
import Respondfield from "./respondfield";
class EmailWindow extends Component {
  state = {};
  render() {
    return (
      <div>
        <Respondfield Response={this.props.Response}></Respondfield>
      </div>
    );
  }
}

export default EmailWindow;
