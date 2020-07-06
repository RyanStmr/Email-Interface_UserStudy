import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";
import ImportantInbox from "./importantInbox";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorIcon from "@material-ui/icons/Error";
import InboxIcon from "@material-ui/icons/Inbox";
import EmailIcon from "@material-ui/icons/Email";
import Inbox from "./constants.js";
import Badge from "@material-ui/core/Badge";
import "./EmailClient.css";
import ProfileBox from "./ProfileBox";
class EmailClient extends Component {
  state = {
    currentInbox: "AllInbox",
    currentEmail: 0,
    inbox: Inbox,
    mailNrBadge: Inbox.length,
    events: [],
  };

  handleEmailChange = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleIncomingEvent = (event) => {
    let copy = this.state;
    copy.events.push(event);
    this.setState(copy);
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
      if (email.id === emailID) email.type = "BinInbox";
    });

    this.setState(copy);
    this.forceUpdate();
    this.countEmails();
  };

  onMoveToImportant = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.id === emailID) email.type = "ImportantInbox";
    });

    this.setState(copy);
    this.forceUpdate();
    this.countEmails();
  };

  countEmails = () => {
    let counter = 0;
    this.state.inbox.forEach((element) => {
      counter = element.type === "AllInbox" ? counter + 1 : counter;
    });
    let copy = this.state;
    copy.mailNrBadge = counter;

    this.setState(copy);
  };

  handleInboxChange = (whichInbox) => {
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
          onMoveToImportant={this.onMoveToImportant}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
        ></BinInbox>
      );
    } else if (currentInbox === "AllInbox") {
      inbox = (
        <AllInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
        ></AllInbox>
      );
    } else if (currentInbox === "SpamInbox") {
      inbox = (
        <SpamInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
        ></SpamInbox>
      );
    } else if (currentInbox === "ImportantInbox") {
      inbox = (
        <ImportantInbox
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          Response={this.hanldeResponse}
          onNewEmail={this.handleEmailChange}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
        ></ImportantInbox>
      );
    }

    return (
      <div className="entireClient">
        <div className="NavBar">
          <div className="HeaderInfo">
            <p>Welcome to your Email Client, {this.props.UserInfo.userName}</p>
            <ProfileBox className="ProfileBox"></ProfileBox>
          </div>
          <nav>
            <ul className="nav-links">
              <Link
                to="/EmailClient/AllMails"
                onClick={() => this.handleInboxChange("AllInbox")}
              >
                <li className="button-links">
                  <Badge badgeContent={this.state.mailNrBadge} color="error">
                    <Button
                      variant="contained"
                      color={currentInbox === "AllInbox" ? "secondary" : ""}
                      startIcon={<InboxIcon />}
                    >
                      Inbox
                    </Button>
                  </Badge>
                </li>
              </Link>
              <Link
                to="/EmailClient/ImportantInbox"
                onClick={() => this.handleInboxChange("ImportantInbox")}
              >
                <li className="button-links">
                  <Button
                    variant="contained"
                    color={currentInbox === "ImportantInbox" ? "secondary" : ""}
                    startIcon={<EmailIcon />}
                  >
                    Important
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
                    color={currentInbox === "SpamInbox" ? "secondary" : ""}
                    startIcon={<ErrorIcon />}
                  >
                    Spam
                  </Button>
                </li>
              </Link>
              <Link
                to="/EmailClient/Bin"
                onClick={() => this.handleInboxChange("BinInbox")}
              >
                <li className="button-links">
                  <Button
                    variant="contained"
                    color={currentInbox === "BinInbox" ? "secondary" : ""}
                    startIcon={<DeleteIcon />}
                  >
                    Bin
                  </Button>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        {inbox}
      </div>
    );
  }
}

export default EmailClient;
