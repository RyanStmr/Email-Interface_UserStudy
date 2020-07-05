import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class SpamInbox extends Component {
  state = { spamInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ spamInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ spamInbox: inbox });
  };
  render() {
    return (
      <div style={{ position: "fixed", height: "762px" }}>
        <Sidebar
          Mails={this.state.spamInbox}
          inboxType="SpamInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          onMoveToImportant={this.props.onMoveToImportant}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.Recipient}
          userName={this.props.userName}
        />
      </div>
    );
  }
}

export default SpamInbox;
