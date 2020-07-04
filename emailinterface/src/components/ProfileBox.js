import SettingsIcon from "@material-ui/icons/Settings";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import InfoIcon from "@material-ui/icons/Info";

class ProfileBox extends Component {
  state = {};
  render() {
    return (
      <div style={{marginLeft: "auto"}}>
        <Button style={{ backgroundColor: "#f2f3f2", margin: "5px" }}>
          {" "}
          <SettingsIcon size="large" style={{ color: "black" }}></SettingsIcon>
        </Button>
        <Button style={{ backgroundColor: "#f2f3f2", margin: "5px" }}>
          {" "}
          <InfoIcon style={{ color: "black" }}></InfoIcon>
        </Button>
      </div>
    );
  }
}

export default ProfileBox;
