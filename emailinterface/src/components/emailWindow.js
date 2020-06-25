import React, { Component } from "react";
import Respondfield from "./respondfield";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";
import EmailTopBar from "./EmailTopBar";
import HeaderInfoEmail from "./HeaderInfoEmail";
class EmailWindow extends Component {
  state = {
    respond: false,
  };

  resetSelectedTab = () => {
    this.props.resetSelectedTab();
    this.props.onNewEmail(undefined);
  };

  handleResponse = () => {
    this.setState({ respond: !this.state.respond });
  };

  render() {
    const SpecificEmail = this.props.Email.mail;
    let email = this.props.Email;

    var styles = {
      buttonsSidebar: {
        color: "#f2f3f2",
        backgroundColor: "#ff5353",
        margin: "10px",
      },
    };

    return (
      <div>
        <EmailTopBar
          onMoveEmailBackward={this.props.onMoveEmailBackward}
          onMoveEmailForward={this.props.onMoveEmailForward}
        ></EmailTopBar>
        <HeaderInfoEmail
          Email={email}
          emailAdress={this.props.emailAdress}
        ></HeaderInfoEmail>
        <div
          style={{
            marginLeft: "30px",
            marginTop: "5px",
            overflow: "scroll",
            width: "710px",
            height: "450px",
          }}
        >
          <SpecificEmail
            userName={this.props.userName}
            emailAdress={this.props.emailAdress}
          ></SpecificEmail>
        </div>
        <div>
          <Button
            startIcon={<ErrorIcon />}
            style={styles.buttonsSidebar}
            variant="contained"
            onClick={() => {
              this.props.onMoveToSpam(email.id);
              this.resetSelectedTab();
            }}
          >
            Move to Spam
          </Button>
          <Button
            style={styles.buttonsSidebar}
            startIcon={<CreateIcon />}
            variant="contained"
            onClick={() => {
              this.handleResponse(this.state.respond);
            }}
          >
            Respond
          </Button>
          <Button
            style={styles.buttonsSidebar}
            startIcon={<DeleteIcon />}
            variant="contained"
            onClick={() => {
              this.props.onMoveToBin(email.id);
              this.resetSelectedTab();
            }}
          >
            Delete
          </Button>
        </div>
        {this.props.Email.conversation.map((conversationPart) => {
          const ConversationPart = conversationPart;
          return <ConversationPart></ConversationPart>;
        })}
        {this.state.respond && (
          <Respondfield Response={this.props.Response}></Respondfield>
        )}
      </div>
    );
  }
}

export default EmailWindow;
//<p>{this.props.Email.response}</p>
