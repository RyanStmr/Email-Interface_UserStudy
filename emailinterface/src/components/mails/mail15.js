import React, { Component } from "react";

class Mail15 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>Attention {this.props.userName},</p>
        <p>
          Due to various emails received by our webmail users of receiving
          pishing spam, COMPANY will be upgrading webmail system to 500MB of
          space.
        </p>
        <p>
          Click{" "}
          <a href="https://www.google.com" target="_blank">
            here
          </a>{" "}
          to login to your account {this.props.emailAdress} for confirmation and
          upgrade
        </p>
        <p>
          Your account will remain active after you have successfully upgraded
          to the new 500MBs
        </p>
        <p>Thanks for bearing with us,</p>
        <p>IT @ COMPANY.co</p>
      </React.Fragment>
    );
  }
}

Mail15.defaultProps = {
  sender: "IT@company.com",
  date: "February 11, 2020, 6:13",
  subject: "Upgrade WebMail",
  capital: "IT",
};

export default Mail15;
