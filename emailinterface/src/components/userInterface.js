import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import EmailIcon from "@material-ui/icons/Email";

class UserInterface extends Component {
  state = {
    currentEmail: 0,
  };

  handleEmailChange = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "red", width: 1000, height: 50 }}>
          <div>
            <h1
              style={{
                color: "white",
                textshadow: "5px 5px white",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Email Inbox{" "}
              <EmailIcon
                style={{
                  verticalAlign: "middle",
                }}
              ></EmailIcon>
            </h1>
          </div>
        </div>
        <Sidebar onNewEmail={this.handleEmailChange}></Sidebar>;
    </div>
    );
  }
}

export default UserInterface;
