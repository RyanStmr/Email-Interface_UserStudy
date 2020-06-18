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
      <div>
        <h3 style={{ float: "right", paddingRight: "40px", color: "white" }}>
          Spam ({this.state.spamInbox.length})
        </h3>
        <Sidebar
          Mails={this.state.spamInbox}
          inboxType="SpamInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
        />
      </div>
    );
  }
}

export default SpamInbox;
