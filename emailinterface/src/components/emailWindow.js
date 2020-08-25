import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import { Snackbar } from "@material-ui/core";

import EmailTopBar from "./EmailTopBar";
import HeaderInfoEmail from "./HeaderInfoEmail";
class EmailWindow extends Component {
  state = {
    printMessage: false,
  };

  resetSelectedTab = () => {
    this.props.resetSelectedTab();
    //this.props.onNewEmail(undefined);
  };

  componentDidMount() {
    this.collectionInterval = setInterval(this.getScrollAmount, 500);
  }

  componentWillUnmount = () => {
    clearInterval(this.collectionInterval);
  };

  getScrollAmount = () => {
    let scrollAmount = document.getElementById("scrollContainer").scrollTop;
    this.props.inEmailScrollAmount(scrollAmount);
  };

  render() {
    const handleClick = () => {
      this.setState({ printMessage: true });
    };

    const handleClose = () => {
      this.setState({ printMessage: false });
    };

    const SpecificEmail = this.props.Email.mail;
    let email = this.props.Email;

    var styles = {
      buttonsSidebar: {
        color: "#2E2E2E",
        margin: "10px",
        backgroundColor: "#f2f2f2",
      },
    };

    return (
      <div
        onMouseEnter={() => {
          this.props.insideEmailInfo(true, "InEmailWindow");
        }}
        onMouseLeave={() => {
          this.props.insideEmailInfo(false, "InEmailWindow");
        }}
        onMouseOver={() => {
          this.props.insideEmailInfo(true, "InEmailWindow");
        }}
        style={{
          border: "0.5px solid grey",
          height: "950px",
          borderRadius: "5px",
        }}
      >
        <div>
          <div>
            <Button
              style={styles.buttonsSidebar}
              startIcon={<EmailIcon />}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToImportant(email.mail.defaultProps.keyID);
                this.resetSelectedTab();
                handleClick();
              }}
              onMouseEnter={() => {
                this.props.insideEmailInfo(true, "InMoveToImportantButton");
              }}
              onMouseLeave={() => {
                this.props.insideEmailInfo(false, "InMoveToImportantButton");
              }}
              onMouseOver={() => {
                this.props.insideEmailInfo(true, "InMoveToImportantButton");
              }}
            >
              Move to Important
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={this.state.printMessage}
                autoHideDuration={1500}
                onClose={handleClose}
              ></Snackbar>
            </Button>
            <Button
              startIcon={<ErrorIcon />}
              style={styles.buttonsSidebar}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToSpam(email.mail.defaultProps.keyID);
                this.resetSelectedTab();
                handleClick();
              }}
              onMouseEnter={() => {
                this.props.insideEmailInfo(true, "InMoveToSpamButton");
              }}
              onMouseLeave={() => {
                this.props.insideEmailInfo(false, "InMoveToSpamButton");
              }}
              onMouseOver={() => {
                this.props.insideEmailInfo(true, "InMoveToSpamButton");
              }}
            >
              Move to Spam
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={this.state.printMessage}
                autoHideDuration={1500}
                onClose={handleClose}
              ></Snackbar>
            </Button>
            <Button
              style={styles.buttonsSidebar}
              startIcon={<DeleteIcon />}
              variant="outlined"
              onClick={() => {
                this.props.onMoveToBin(email.mail.defaultProps.keyID);
                this.resetSelectedTab();
                handleClick();
              }}
              onMouseEnter={() => {
                this.props.insideEmailInfo(true, "InMoveToBinButton");
              }}
              onMouseLeave={() => {
                this.props.insideEmailInfo(false, "InMoveToBinButton");
              }}
              onMouseOver={() => {
                this.props.insideEmailInfo(true, "InMoveToBinButton");
              }}
            >
              Move to Bin
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={this.state.printMessage}
                autoHideDuration={1000}
                message="Email moved"
                onClose={handleClose}
              ></Snackbar>
            </Button>
          </div>

          <EmailTopBar
            onMoveEmailBackward={this.props.onMoveEmailBackward}
            onMoveEmailForward={this.props.onMoveEmailForward}
          ></EmailTopBar>
          <HeaderInfoEmail
            Email={email}
            emailAdress={this.props.emailAdress}
            insideEmailInfo={this.props.insideEmailInfo}
          ></HeaderInfoEmail>
        </div>
        <hr />
        <div
          id="scrollContainer"
          style={{
            marginLeft: "30px",
            marginTop: "5px",
            overflowY: "scroll",
            width: "710px",
            height: "650px",
            backgroundColor: "white",
          }}
          onMouseEnter={() => {
            this.props.insideEmailInfo(true, "InEmailBody");
          }}
          onMouseLeave={() => {
            this.props.insideEmailInfo(false, "InEmailBody");
          }}
          onMouseOver={() => {
            this.props.insideEmailInfo(true, "InEmailBody");
          }}
        >
          <SpecificEmail
            userName={this.props.userName}
            emailAdress={this.props.emailAdress}
            insideEmailInfo={this.props.insideEmailInfo}
            clickedLink={this.props.clickedLink}
          ></SpecificEmail>
        </div>
      </div>
    );
  }
}

export default EmailWindow;
