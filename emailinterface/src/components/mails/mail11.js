import React, { Component } from "react";

class Mail11 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "#4472c4" }}>Microsoft Account</h1>
        <p>Dear {this.props.userName},</p>
        <p>
          Someone in Bogotá Colombia attempted to log into your account several
          times. If you believe this was fraudulent activity please report it{" "}
          <a href="https://www.google.com" target="_blank">
            here
          </a>
          .
        </p>
        <p>
          If you do not believe this to be fraudulent activity you may ignore
          this message
        </p>
        <br />
        <p>Sincerely,</p>
        <p>Office365 @ COMPANY.com</p>
      </React.Fragment>
    );
  }
}

Mail11.defaultProps = {
  sender: "Office365@company.com",
  date: "Mai 3, 2020, 6:25",
  subject: "Microsoft Account Issues",
  capital: "O",
  keyID: 2,
};

export default Mail11;
