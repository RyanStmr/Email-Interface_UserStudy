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
        <h1>Papierkorb</h1>
        <Sidebar
          Mails={this.state.binInbox}
          InboxType="BinInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
        />
      </div>
    );
  }
}

export default BinInbox;
