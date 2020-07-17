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
import Inbox from "./emailsToImplement.js";
import Badge from "@material-ui/core/Badge";
import "./EmailClient.css";
import ProfileBox from "./ProfileBox";
class EmailClient extends Component {
  state = {
    currentInbox: "AllInbox",
    currentEmail: 0,
    inbox: Inbox,
    mailNrBadge: 0,
    events: [],
  };

  //Fisher Yates Array shuffle algorithm
  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  componentWillMount = () => {
    let copy = this.state;
    let usersInbox = [];

    copy.inbox.map((email) => {
      if (email.visible) usersInbox.push(email);
    });

    usersInbox.map((email) => {
      //give each Email an ID for adressing in App
      email["id"] = copy.inbox.indexOf(email);
      email["type"] = "AllInbox";
    });

    this.shuffleArray(usersInbox);
    copy.inbox = usersInbox;
    this.setState(copy);
    this.countEmails();
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

    if (counter === 0) alert("Done with study!");

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
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          HeaderInfo={this.props.HeaderInfo}
          inEmailText={this.props.inEmailText}
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
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          HeaderInfo={this.props.HeaderInfo}
          inEmailText={this.props.inEmailText}
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
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          HeaderInfo={this.props.HeaderInfo}
          inEmailText={this.props.inEmailText}
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
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          HeaderInfo={this.props.HeaderInfo}
          inEmailText={this.props.inEmailText}
        ></ImportantInbox>
      );
    }

    return (
      <div className="entireClient">
        <div className="HeaderInfo">
          <p>Welcome to your Email Client, {this.props.UserInfo.userName}</p>
          <ProfileBox
            className="ProfileBox"
            setInboxResult={() => this.props.setInboxResult(this.state.inbox)}
          ></ProfileBox>
        </div>
        <nav className="nav-links">
          <ul>
            <Link
              to="/EmailClient/AllMails"
              onClick={() => {
                this.handleInboxChange("AllInbox");
                this.props.onNewInbox("AllInbox");
              }}
            >
              <li className="button-links">
                <Badge badgeContent={this.state.mailNrBadge} color="error">
                  <Button
                    style={{ width: "200px", height: "50px" }}
                    variant="outlined"
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
              onClick={() => {
                this.handleInboxChange("ImportantInbox");
                this.props.onNewInbox("ImportantInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "200px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "ImportantInbox" ? "secondary" : ""}
                  startIcon={<EmailIcon />}
                >
                  Important
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Spam"
              onClick={() => {
                this.handleInboxChange("SpamInbox");
                this.props.onNewInbox("SpamInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "200px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "SpamInbox" ? "secondary" : ""}
                  startIcon={<ErrorIcon />}
                >
                  Spam
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Bin"
              onClick={() => {
                this.handleInboxChange("BinInbox");
                this.props.onNewInbox("BinInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "150px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "BinInbox" ? "secondary" : ""}
                  startIcon={<DeleteIcon />}
                >
                  Bin
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
