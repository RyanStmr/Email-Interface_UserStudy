import React, { Component } from "react";

class Mail9 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "rgb(68, 114, 196)" }}>
          <b>LinkedIn</b>
        </h1>

        <h2 style={{ color: "rgb(68, 114, 196)" }}>REMINDER</h2>

        <h3>
          <b>
            Invitation reminders/:&nbsp;&nbsp;&nbsp; From&nbsp; &nbsp;
            <a href="https://www.google.com" target="_blank">
              Steve Donaghy
            </a>
          </b>
        </h3>

        <h3>
          <b>There are a total of </b>
          <strong>
            <b>4</b>
            <b> </b>
          </strong>
          <b>
            other messages awaiting your reply.&nbsp;&nbsp;
            <a href="https://www.google.com" target="_blank">
              Go to INBOX now
            </a>
            .
          </b>
        </h3>
        <p>
          <b>
            Don&rsquo;t want to receive email notifications? Login to your
            LinkedIn account to{" "}
            <a href="https://www.google.com" target="_blank">
              unsubscribe.
            </a>
            <br />
            LinkedIn values your privacy.&nbsp; At no time has LinkedIn made
            your email address available to any other LinkedIn users without
            your permission.&nbsp;&nbsp;
            <br />
            c2013, LinkedIn Corporation.
          </b>
        </p>

        <p>&nbsp;</p>
      </React.Fragment>
    );
  }
}

Mail9.defaultProps = {
  sender: "info@linkedin.com",
  date: "June 1, 2020, 08:03",
  subject: "Invitation Reminder",
  capital: "L",
  keyID: 2,
};

export default Mail9;
