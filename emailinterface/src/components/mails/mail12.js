import React, { Component } from "react";

class Mail12 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>
          Your email {this.props.emailAdress} has exceeded one or more size
          limits set by the Network Admins. Please click the link below to
          re-validate your email account.
        </p>
        <a href="https://www.google.com" target="_blank">
          Login to Outlook Web Access
        </a>
        <p>Thanks for your co-operation.</p>
        <p>IT</p>
      </React.Fragment>
    );
  }
}

Mail12.defaultProps = {
  sender: "Outlook@company.com",
  date: "March 12, 2020, 7:38",
  subject: "Your Email Account Size",
  capital: "O",
  keyID: 2,
};

export default Mail12;
