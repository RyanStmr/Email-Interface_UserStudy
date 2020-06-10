import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import EmailIcon from "@material-ui/icons/Email";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";
import Mail3 from "./mails/mail3";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";

class EmailClient extends Component {
  state = {
    currentInbox: "",
    currentEmail: 0,
    inbox: [
      { mail: Mail1, id: 1, title: "Email 1", type: "AllInbox" },
      { mail: Mail2, id: 2, title: "Email 2", type: "AllInbox" },
      { mail: Mail3, id: 3, title: "Email 3", type: "AllInbox" },
      { mail: Mail1, id: 4, title: "Email 4", type: "BinInbox" },
      { mail: Mail2, id: 5, title: "Email 5", type: "BinInbox" },
      { mail: Mail3, id: 6, title: "Email 6", type: "AllInbox" },
    ],
  };

  handleEmailChange = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  onMoveToSpam = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.id == emailID) email.type = "BinInbox";
    });

    this.setState(copy);
    this.forceUpdate();
  };

  handleInboxChange = (whichInbox) => {
    console.log(whichInbox);
    let copy = this.state;
    copy.currentInbox = whichInbox;
    this.setState(copy);
  };

  createVirtualInbox = (inboxType) => {
    let virtualInbox = [];
    this.state.map((email) => {
      if (email.type === inboxType) virtualInbox.push(email);
    });
    return virtualInbox;
  };

  render() {
    const currentInbox = this.state.currentInbox;
    let inbox;

    if (currentInbox === "BinInbox") {
      inbox = (
        <BinInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
        ></BinInbox>
      );
    } else if (currentInbox === "AllMails") {
      inbox = (
        <AllInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
        ></AllInbox>
      );
    } else if (currentInbox === "SpamInbox") {
      inbox = (
        <SpamInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
        ></SpamInbox>
      );
    } else {
    }

    return (
      <div>
        <nav>
          <ul className="nav-links">
            <Link
              to="/EmailClient/AllMails"
              onClick={() => this.handleInboxChange("AllMails")}
            >
              <li>All Mails</li>
            </Link>
            <Link
              to="/EmailClient/Bin"
              onClick={() => this.handleInboxChange("BinInbox")}
            >
              <li>Bin</li>
            </Link>
          </ul>
        </nav>
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
          {inbox}
        </div>
      </div>
    );
  }
}

export default EmailClient;
