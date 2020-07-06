import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./HeaderInfoEmail.css";

class HeaderInfoEmail extends Component {
  state = {};
  render() {
    return (
      <div className="AllHeaders">
        <div className="Wrapper">
          <Avatar
            style={{
              backgroundColor: "grey",
              top: "10px",
              marginLeft: "10px",
            }}
          >
            {this.props.Email.mail.defaultProps.capital}
          </Avatar>
        </div>
        <div>
          <p className="HeaderText">
            <strong>From: </strong> {this.props.Email.mail.defaultProps.sender}{" "}
          </p>
          <p className="HeaderText">
            {" "}
            <strong>To: </strong>
            {this.props.emailAdress}{" "}
          </p>
          <p className="HeaderText">
            {" "}
            <strong>Date: </strong>
            {this.props.Email.mail.defaultProps.date}
          </p>
          <p className="HeaderText">
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
