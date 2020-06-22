import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "@material-ui/core/Button";

class EmailTopBar extends Component {
  state = {};
  render() {
    var styles = {
      buttonsTopBar: {
        color: "#f2f3f2",
        backgroundColor: "#ff5353",
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
          startIcon={<DeleteIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<ErrorIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<CreateIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<DeleteIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<ErrorIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<CreateIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<ErrorIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<CreateIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<DeleteIcon />}
        ></Button>
        <Button
          style={styles.buttonsTopBar}
          variant="contained"
          startIcon={<ErrorIcon />}
        ></Button>
      </div>
    );
  }
}

export default EmailTopBar;
