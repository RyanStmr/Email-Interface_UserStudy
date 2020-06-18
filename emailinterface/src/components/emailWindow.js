import React, { Component } from "react";
import Respondfield from "./respondfield";
class EmailWindow extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.Email.conversation.map((conversationPart) => {
          const ConversationPart = conversationPart;
          return <ConversationPart></ConversationPart>;
        })}

        <Respondfield Response={this.props.Response}></Respondfield>
      </div>
    );
  }
}

export default EmailWindow;
//<p>{this.props.Email.response}</p>
