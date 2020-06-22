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
            }}
          >
            {this.props.Email.id}
          </Avatar>
        </div>
        <div>
          <p className="HeaderText">From: {this.props.Email.title} </p>
          <p className="HeaderText"> To: {this.props.emailAdress} </p>
          <p className="HeaderText">Date: {this.props.emailAdress}</p>
          <p className="HeaderText">Subject: {this.props.emailAdress}</p>
        </div>
      </div>
    );
  }
}

export default HeaderInfoEmail;
