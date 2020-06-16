import React, { Component } from "react";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";
import Mail3 from "./mails/mail3";
import Mail4 from "./mails/mail4";
import Mail5 from "./mails/mail5";
import Mail6 from "./mails/mail6";
import Mail7 from "./mails/mail7";
import Mail8 from "./mails/mail8";
import Mail9 from "./mails/mail9";
import Mail10 from "./mails/mail10";
import Mail11 from "./mails/mail11";
import Mail12 from "./mails/mail12";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";
import Button from "@material-ui/core/Button";

class EmailClient extends Component {
  state = {
    currentInbox: "",
    currentEmail: 0,
    inbox: [
      { mail: Mail1, id: 1, title: "Ruderer T.", type: "AllInbox" },
      { mail: Mail2, id: 2, title: "Check 24.", type: "AllInbox" },
      { mail: Mail3, id: 3, title: "Email 3", type: "AllInbox" },
      { mail: Mail4, id: 4, title: "Spotify", type: "SpamInbox" },
      { mail: Mail5, id: 5, title: "Breaking news", type: "BinInbox" },
      { mail: Mail6, id: 6, title: "Mailbox compromissed", type: "AllInbox" },
      { mail: Mail7, id: 7, title: "Travel Agency", type: "AllInbox" },
      { mail: Mail8, id: 8, title: "LinkedIn", type: "AllInbox" },
      { mail: Mail9, id: 9, title: "Dropbox", type: "AllInbox" },
      { mail: Mail10, id: 10, title: "dhl", type: "AllInbox" },
      { mail: Mail11, id: 11, title: "Skype", type: "AllInbox" },
      { mail: Mail12, id: 12, title: "Crime Report", type: "AllInbox" },
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
                <Button variant="outlined">Posteingang</Button>
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
                <Button variant="outlined">Papierkorb</Button>
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
                <Button variant="outlined">Spam</Button>
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
