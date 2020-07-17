import React, { Component } from "react";

class Mail8 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>Hello {this.props.userName},</p>
        <p>
          The IT Department was running an email server migration last night and
          encountered an error with several email accounts. Your account{" "}
          {this.props.emailAdress} happened to be one of them.
        </p>
        <p>
          We attempted to resolve this problem and believe we have fixed it.
        </p>
        <p>
          If your email has been working just fine, please let us know by going
          to this secure{" "}
          <a href="https://www.google.com" target="_blank">
            website
          </a>{" "}
          and validate your email address is working.
        </p>

        <p>Thanks for your quick cooperation,</p>
        <p>IT</p>
      </React.Fragment>
    );
  }
}

Mail8.defaultProps = {
  sender: "it.info@company.com",
  date: "March 13, 2020,09:10",
  subject: "Issues with your Email Account",
  capital: "IT",
  keyID: 2,
};

export default Mail8;
