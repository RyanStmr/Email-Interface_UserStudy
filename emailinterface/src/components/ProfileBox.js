import SettingsIcon from "@material-ui/icons/Settings";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import InfoIcon from "@material-ui/icons/Info";

class ProfileBox extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        <Button variant="contained" style={{ margin: "5px" }}>
          {" "}
          <SettingsIcon></SettingsIcon>
        </Button>
        <Button variant="contained" style={{ margin: "5px" }}>
          {" "}
          <InfoIcon></InfoIcon>
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#75c974", margin: "10px" }}
          onClick={this.props.setInboxResult}
        >
          {" "}
          <ExitToAppIcon></ExitToAppIcon>Logout
        </Button>
      </div>
    );
  }
}

export default ProfileBox;
