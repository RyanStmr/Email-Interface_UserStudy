import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class SpamInbox extends Component {
  state = { allInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
  };
  render() {
    return (
      <div>
        <h1>Spam</h1>
        <Sidebar
          Mails={this.state.allInbox}
          inboxType="SpamInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
        />
      </div>
    );
  }
}

export default SpamInbox;