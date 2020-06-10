import React, { Component } from "react";
import Sidebar from "./sidebar.js";
import Mail1 from "./mails/mail1";
import Mail2 from "./mails/mail2";
import Mail3 from "./mails/mail3";

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
      if (email.type === "AllInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
  };

  render() {
    return (
      <div>
        <h1>im BinInbox</h1>
        <Sidebar
          Mails={this.state.binInbox}
          InboxType="BinInbox"
          onMoveToSpam={this.props.onMoveToSpam}
        />
      </div>
    );
  }
}

export default BinInbox;
