import React, { Component } from "react";

class Emails extends Component {
  state = {
    emails: [
      { id: 1, text: "Hello im Email 1" },
      { id: 2, text: "Hello im Email 2" },
      { id: 3, text: "Hello im Email 3" },
    ],
  };
  render() {
    return <div />;
  }
}

export default Emails;
