import React, { Component } from "react";

class Mail14 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            boxSizing: "border-box",
            margin: "20px 0px 10px",
            fontSize: "36px",
            lineHeight: "1.1",
            color: "rgb(68, 114, 196)",
          }}
        >
          <span class="marker">
            <samp>
              <font face="Helvetica Neue, Helvetica, Arial, sans-serif">
                <span style={{ fontWeight: "500" }}>Spotify&nbsp;</span>
              </font>
              <strong style={{ fontFamily: "Arial", fontWeight: "500" }}>
                &reg;
              </strong>
            </samp>
          </span>
        </h1>

        <p>Attention {this.props.userName}!</p>

        <p>
          Your Spotify has been disabled.
          <br />
          You&#39;ve place you&nbsp;account under the risk of termination by not
          keeping the correct informations .&nbsp; &nbsp;
        </p>

        <p>Please verify your account as soon as possible.</p>

        <p>
          Ready to check ? Click{" "}
          <a href="https://www.google.com" target="_blank">
            here
          </a>{" "}
          to get back your account.
        </p>

        <p>Inc.Spotify</p>

        <p></p>
      </React.Fragment>
    );
  }
}

Mail14.defaultProps = {
  sender: "infos@spotify.com",
  date: "November 13, 2019, 7:47",
  subject: "Your Spotify Account Verification",
  capital: "S",
};

export default Mail14;
