import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class SpamInbox extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>im SpamInbox</h1>
        <Sidebar
          Mails={this.props.Mails}
          inboxType="SpamInbox"
          onMoveToSpam={this.props.onMoveToSpam}
        />
      </div>
    );
  }
}

export default SpamInbox;
