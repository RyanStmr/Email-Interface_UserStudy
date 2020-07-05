import React, { Component } from "react";

class Mail6 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>
          <img
            alt=""
            src="https://www.underconsideration.com/brandnew/archives/dropbox_2017_logo.png"
            style={{ width: "120px", height: "27px" }}
          />
        </p>

        <title></title>
        {/*<link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
        />*/}
        <p>&nbsp;</p>

        <p>Hi {this.props.userName},</p>

        <p>You have a new document/s shared to you via dropbox sharing.</p>

        <p>
          <a href="https://www.google.com" target="_blank">
            VIEW HERE
          </a>
        </p>

        <p>&nbsp;</p>

        <p>&nbsp;</p>
      </React.Fragment>
    );
  }
}

Mail6.defaultProps = {
  sender: "info@dropbox.com",
  date: "Mai 12, 2020, 12:43",
  subject: "Droppbox Notification",
  capital: "D",
};

export default Mail6;
