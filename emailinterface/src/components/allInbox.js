import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class AllInbox extends Component {
  state = { allInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "AllInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
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
        <h1>im AllInbox</h1>
        <Sidebar
          Mails={this.state.allInbox}
          InboxType="AllInbox"
          onMoveToSpam={this.props.onMoveToSpam}
        />
      </div>
    );
  }
}

export default AllInbox;
