import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import "./HeaderInfoEmail.css";

class HeaderInfoEmail extends Component {
  state = {};
  render() {
    return (
      <div className="AllHeaders">
        <div className="Wrapper">
          <Avatar
            style={{
              backgroundColor: deepOrange[500],
              top: "20px",
              marginLeft: "10px",
            }}
          >
            {this.props.Email.capital}
          </Avatar>
        </div>
        <div>
          <p className="HeaderText">
            <strong>From: </strong> {this.props.Email.sender}{" "}
          </p>
          <p className="HeaderText">
            {" "}
            <strong>To: </strong>
            {this.props.emailAdress}{" "}
          </p>
          <p className="HeaderText">
            {" "}
            <strong>Date: </strong>
            {this.props.Email.date}
          </p>
          <p className="HeaderText">
            {" "}
            <strong>Subject: </strong> {this.props.Email.subject}
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderInfoEmail;
