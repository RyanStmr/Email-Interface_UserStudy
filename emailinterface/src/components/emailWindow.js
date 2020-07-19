import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";

import ErrorIcon from "@material-ui/icons/Error";
import EmailTopBar from "./EmailTopBar";
import HeaderInfoEmail from "./HeaderInfoEmail";
class EmailWindow extends Component {
  state = {};

  resetSelectedTab = () => {
    this.props.resetSelectedTab();
    //this.props.onNewEmail(undefined);
  };

  log() {
    console.log("hovering emailInfo");
  }

  render() {
    const SpecificEmail = this.props.Email.mail;
    let email = this.props.Email;

    var styles = {
      buttonsSidebar: {
        color: "#2E2E2E",
        margin: "10px",
      },
    };

    return (
      <div
        style={{
          border: "1px solid grey",
          backgroundColor: "#fafafa",
          height: "850px",
          borderRadius: "5px",
        }}
      >
        <div style={{}} onMouseOver={this.log}>
          <div>
            <Button
              style={styles.buttonsSidebar}
              startIcon={<EmailIcon />}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToImportant(email.id);
                this.resetSelectedTab();
              }}
            >
              Move to Important
            </Button>
            <Button
              startIcon={<ErrorIcon />}
              style={styles.buttonsSidebar}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToSpam(email.id);
                this.resetSelectedTab();
              }}
            >
              Move to Spam
            </Button>
            <Button
              style={styles.buttonsSidebar}
              startIcon={<DeleteIcon />}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToBin(email.id);
                this.resetSelectedTab();
              }}
            >
              Move to Bin
            </Button>
          </div>

          <EmailTopBar
            onMoveEmailBackward={this.props.onMoveEmailBackward}
            onMoveEmailForward={this.props.onMoveEmailForward}
          ></EmailTopBar>
          <HeaderInfoEmail
            Email={email}
            emailAdress={this.props.emailAdress}
            HeaderInfo={this.props.HeaderInfo}
          ></HeaderInfoEmail>
        </div>
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
            inEmailText={this.props.inEmailText}
          ></SpecificEmail>
        </div>
      </div>
    );
  }
}

export default EmailWindow;
//<p>{this.props.Email.response}</p>
