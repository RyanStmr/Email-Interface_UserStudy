import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorIcon from "@material-ui/icons/Error";
import InboxIcon from "@material-ui/icons/Inbox";
import EmailIcon from "@material-ui/icons/Email";
import Inbox from "./constants.js";
import Badge from "@material-ui/core/Badge";
import "./EmailClient.css";

class EmailClient extends Component {
  state = {
    currentInbox: "AllInbox",
    currentEmail: 0,
    inbox: Inbox,
    mailNrBadge: Inbox.length,
  };

  handleEmailChange = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  hanldeResponse = (emailID, textContent) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.id === emailID) {
        email.response = textContent;
        console.log(textContent);

        //Create Mail Component to put into Conversation
        let tempDate = new Date();
        var date =
          tempDate.getHours() +
          ":" +
          tempDate.getMinutes() +
          " am " +
          tempDate.getDate() +
          "." +
          (tempDate.getMonth() + 1) +
          "." +
          tempDate.getFullYear();

        const NewResponse = () => (
          <div
            style={{
              backgroundColor: "#ff5353",
              opacity: "0.9",
              width: "500px",
              wordBreak: "break-word",
            }}
          >
            <p style={{ backgroundColor: "white", padding: "10px" }}>
              Geantwortet um {date}
            </p>
            <p style={{ fontSize: "12px", padding: "10px" }}>{textContent}</p>
          </div>
        );

        email.conversation.push(NewResponse);
      }
    });

    this.setState(copy);
    this.forceUpdate();
  };

  onMoveToSpam = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.id === emailID) email.type = "SpamInbox";
    });

    this.setState(copy);
    this.forceUpdate();
    this.countEmails();
  };

  onMoveToBin = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.id == emailID) email.type = "BinInbox";
    });

    this.setState(copy);
    this.forceUpdate();
    this.countEmails();
  };

  countEmails = () => {
    let counter = 0;
    console.log("called");

    this.state.inbox.forEach((element) => {
      counter = element.type === "AllInbox" ? counter + 1 : counter;
    });
    let copy = this.state;
    copy.mailNrBadge = counter;

    this.setState(copy);
  };

  handleInboxChange = (whichInbox) => {
    console.log(whichInbox);
    let copy = this.state;
    copy.currentInbox = whichInbox;
    copy.currentEmail = undefined;
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
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
        ></BinInbox>
      );
    } else if (currentInbox === "AllInbox") {
      inbox = (
        <AllInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
        ></AllInbox>
      );
    } else if (currentInbox === "SpamInbox") {
      inbox = (
        <SpamInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
        ></SpamInbox>
      );
    } else {
    }

    return (
      <div className="entireClient">
        <div className="HeaderInfo">
          <p>Welcome to your Inbox, {this.props.UserInfo.userName}</p>
          <EmailIcon className="EmailIcon" fontSize="large"></EmailIcon>
          <h1 style={{ marginLeft: "10px", alignSelf: "center" }}>
            Email Client
          </h1>
        </div>
        <nav style={{ alignItems: "center" }}>
          <ul className="nav-links">
            <Link
              to="/EmailClient/AllMails"
              onClick={() => this.handleInboxChange("AllInbox")}
            >
              <li className="button-links">
                <Badge badgeContent={this.state.mailNrBadge} color="error">
                  <Button
                    variant="contained"
                    color="white"
                    startIcon={<InboxIcon />}
                  >
                    Posteingang
                  </Button>
                </Badge>
              </li>
            </Link>
            <Link
              to="/EmailClient/Bin"
              onClick={() => this.handleInboxChange("BinInbox")}
            >
              <li className="button-links">
                <Button variant="contained" color="" startIcon={<DeleteIcon />}>
                  Papierkorb
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Spam"
              onClick={() => this.handleInboxChange("SpamInbox")}
            >
              <li className="button-links">
                <Button
                  variant="contained"
                  color="white"
                  startIcon={<ErrorIcon />}
                >
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
