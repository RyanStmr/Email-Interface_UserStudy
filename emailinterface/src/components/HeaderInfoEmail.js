import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./HeaderInfoEmail.css";

class HeaderInfoEmail extends Component {
  state = {};

  log(whichP) {
    console.log(whichP);
  }

  render() {
    return (
      <div className="AllHeaders">
        <div className="Wrapper">
          <Avatar
            style={{
              backgroundColor: `${this.props.Email.mail.defaultProps.avatarColor}`,
              top: "10px",
              marginLeft: "10px",
            }}
          >
            {this.props.Email.mail.defaultProps.capital}
          </Avatar>
        </div>
        <div>
          <p
            className="HeaderText"
            onMouseOver={() => {
              this.props.HeaderInfo("From:");
            }}
          >
            <strong>From: </strong> {this.props.Email.mail.defaultProps.sender}{" "}
          </p>
          <p
            className="HeaderText"
            onMouseOver={() => {
              this.props.HeaderInfo("To:");
            }}
          >
            {" "}
            <strong>To: </strong>
            {this.props.emailAdress}{" "}
          </p>
          <p
            className="HeaderText"
            onMouseOver={() => {
              this.props.HeaderInfo("Date:");
            }}
          >
            {" "}
            <strong>Date: </strong>
            {this.props.Email.mail.defaultProps.date}
          </p>
          <p
            className="HeaderText"
            onMouseOver={() => {
              this.props.HeaderInfo("Subject:");
            }}
          >
            {" "}
            <strong>Subject: </strong>{" "}
            {this.props.Email.mail.defaultProps.subject}
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderInfoEmail;
