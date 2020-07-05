import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import FlagIcon from "@material-ui/icons/Flag";
import InfoIcon from "@material-ui/icons/Info";
import RefreshIcon from "@material-ui/icons/Refresh";
import WidgetsIcon from "@material-ui/icons/Widgets";
import LabelIcon from "@material-ui/icons/Label";
import LabelOffIcon from "@material-ui/icons/LabelOff";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PrintIcon from "@material-ui/icons/Print";
import { Snackbar } from "@material-ui/core";

class EmailTopBar extends Component {
  state = {
    printMessage: false,
  };

  render() {
    const handleClick = () => {
      this.setState({ printMessage: true });
    };

    const handleClose = () => {
      this.setState({ printMessage: false });
    };

    var styles = {
      buttonsTopBar: {
        color: "#f2f3f2",
        backgroundColor: "#A4A4A4",
        margin: "5px",
      },

      navButton: {
        color: "#f2f3f2",
        backgroundColor: "#A4A4A4",
        margin: "5px",
      },
    };

    return (
      <div
        style={{
          width: "750px",
          marginBottom: "10px",
          marginRight: "10px",
          justifyContent: "center",
        }}
      >
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<LabelIcon />}
          onClick={handleClick}
        >
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handleClick}
        >
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>

        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<InfoIcon />}
          onClick={handleClick}
        >
          {" "}
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>

        <Button
          style={styles.navButton}
          variant="contained"
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={this.props.onMoveEmailBackward}
        ></Button>
        <Button
          style={styles.navButton}
          variant="contained"
          startIcon={<KeyboardArrowRightIcon />}
          onClick={this.props.onMoveEmailForward}
        ></Button>
      </div>
    );
  }
}

export default EmailTopBar;
