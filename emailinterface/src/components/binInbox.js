import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class BinInbox extends Component {
  state = { binInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "BinInbox") {
        inbox.push(email);
      }
    });

    this.setState({ binInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "BinInbox") {
        inbox.push(email);
      }
    });

    this.setState({ binInbox: inbox });
  };

  render() {
    return (
      <div>
        <h3 style={{ float: "right", paddingRight: "40px", color: "white" }}>
          Papierkorb ({this.state.binInbox.length})
        </h3>
        <Sidebar
          Mails={this.state.binInbox}
          InboxType="BinInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
        />
      </div>
    );
  }
}

export default BinInbox;
