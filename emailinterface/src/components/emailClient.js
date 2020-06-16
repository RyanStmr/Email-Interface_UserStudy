import React, { Component } from "react";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";
import Mail3 from "./mails/mail3";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorIcon from "@material-ui/icons/Error";
import InboxIcon from "@material-ui/icons/Inbox";

class EmailClient extends Component {
  state = {
    currentInbox: "AllInbox",
    currentEmail: 0,
    inbox: [
      { mail: Mail1, id: 1, title: "Ruderer T.", type: "AllInbox" },
      { mail: Mail2, id: 2, title: "Check 24.", type: "AllInbox" },
      { mail: Mail3, id: 3, title: "Email 3", type: "AllInbox" },
      { mail: Mail1, id: 4, title: "Email 4", type: "SpamInbox" },
      { mail: Mail2, id: 5, title: "Email 5", type: "BinInbox" },
      { mail: Mail3, id: 6, title: "Email 6", type: "AllInbox" },
      { mail: Mail1, id: 7, title: "Email 7", type: "AllInbox" },
      { mail: Mail2, id: 8, title: "Email 8", type: "AllInbox" },
      { mail: Mail3, id: 9, title: "Email 9", type: "AllInbox" },
      { mail: Mail1, id: 10, title: "Email 10", type: "AllInbox" },
      { mail: Mail2, id: 11, title: "Email 11", type: "AllInbox" },
      { mail: Mail3, id: 12, title: "Email 12", type: "AllInbox" },
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
      if (email.id == emailID) email.type = "SpamInbox";
    });

    this.setState(copy);
    this.forceUpdate();
  };

  onMoveToBin = (emailID) => {
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

  render() {
    const currentInbox = this.state.currentInbox;
    let inbox;

    if (currentInbox === "BinInbox") {
      inbox = (
        <BinInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
        ></BinInbox>
      );
    } else if (currentInbox === "AllInbox") {
      inbox = (
        <AllInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
        ></AllInbox>
      );
    } else if (currentInbox === "SpamInbox") {
      inbox = (
        <SpamInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
        ></SpamInbox>
      );
    } else {
    }

    return (
      <div>
        <nav>
          <ul
            className="nav-links"
            style={{ display: "left", listStyleType: "none" }}
          >
            <Link
              to="/EmailClient/AllMails"
              onClick={() => this.handleInboxChange("AllInbox")}
            >
              <li
                style={{
                  float: "left",
                  margin: "10px",
                  color: "red",
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<InboxIcon />}
                  style={{ color: this.state }}
                >
                  Posteingang
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Bin"
              onClick={() => this.handleInboxChange("BinInbox")}
            >
              <li
                style={{
                  float: "left",
                  margin: "10px",
                  listStyleType: "none",
                  color: "red",
                }}
              >
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Papierkorb
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Spam"
              onClick={() => this.handleInboxChange("SpamInbox")}
            >
              <li
                style={{
                  float: "left",
                  margin: "10px",
                  listStyleType: "none",
                  color: "red",
                }}
              >
                <Button variant="outlined" startIcon={<ErrorIcon />}>
                  Spam
                </Button>
              </li>
            </Link>
          </ul>
        </nav>
        {inbox}
      </div>
    );
  }
}

export default EmailClient;
