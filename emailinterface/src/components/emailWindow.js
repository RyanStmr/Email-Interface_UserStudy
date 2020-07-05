import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";
import EmailTopBar from "./EmailTopBar";
import HeaderInfoEmail from "./HeaderInfoEmail";
class EmailWindow extends Component {
  state = {};

  resetSelectedTab = () => {
    this.props.resetSelectedTab();
    this.props.onNewEmail(undefined);
  };

  render() {
    const SpecificEmail = this.props.Email.mail;
    let email = this.props.Email;

    var styles = {
      buttonsSidebar: {
        color: "#2E2E2E",
        backgroundColor: "#f2f3f2",
        margin: "10px",
      },
    };

    return (
      <div>
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
              this.props.onMoveToImportant(email.id);
              this.resetSelectedTab();
            }}
          >
            Move to Important
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
            //overflow: "scroll",
            width: "710px",
            height: "450px",
          }}
        >
          <SpecificEmail
            userName={this.props.userName}
            emailAdress={this.props.emailAdress}
          ></SpecificEmail>
        </div>
      </div>
    );
  }
}

export default EmailWindow;
//<p>{this.props.Email.response}</p>
