import React, { Component } from "react";

class Mail10 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 style={{ color: "#9E9E9E" }}>WebMail Account</h3>
        <h1 style={{ color: "#29B6F6" }}>Your mailbox has been compromised</h1>
        <p>Your webmail account has been compromised.</p>
        <p>We have blocked your account for your own safety.</p>
        <p>
          Please follow these steps below to sign in and keep your account safe:
        </p>
        <p>
          <ol>
            <li>
              <a href="https://www.google.com" target="_blank">
                Protect your account
              </a>
            </li>
            <li>
              Learn how to{" "}
              <a href="https://www.google.com" target="_blank">
                make your account more secure
              </a>
            </li>
          </ol>
        </p>
        <p>
          To opt out or change where you receive security notifications,{" "}
          <a href="https://www.google.com" target="_blank">
            click here
          </a>
        </p>

        <p>Thanks,</p>
        <p>Webmail account team</p>
      </React.Fragment>
    );
  }
}

Mail10.defaultProps = {
  senderName: "AcountWebmail",
  sender: "acount@webmail.com",
  date: "June 21, 2020, 4:35",
  subject: "You MailBox Compromissed",
  capital: "A",
  keyID: 2,
};

export default Mail10;
