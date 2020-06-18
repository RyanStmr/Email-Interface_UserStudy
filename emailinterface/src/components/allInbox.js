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
        <h3 style={{ float: "right", paddingRight: "40px", color: "white" }}>
          Gesamte Posteingang ({this.state.allInbox.length})
        </h3>
        <Sidebar
          Mails={this.state.allInbox}
          InboxType="AllInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
        />
      </div>
    );
  }
}

export default AllInbox;
