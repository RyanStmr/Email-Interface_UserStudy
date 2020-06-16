import React, { Component } from "react";

class Mail6 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

<head>
<body>
  <h3 style="color:#9E9E9E;">WebMail Account</h3>
  <h1 style="color:#29B6F6;">Your mailbox has been compromised</h1>
<p>Your webmail account has been compromised.</p>
<p>We have blocked your account for your own safety.</p>
<p>Please follow these steps below to sign in and keep your account safe:</p>
<p>
  <ol>
    <li><a href="{{.URL}}">Protect your account</a></li>
    <li>Learn how to <a href="{{.URL}}">make your account more secure</a></li>
  </ol>
</p>
<p>To opt out or change where you receive security notifications, <a href="{{.URL}}">click here</a></p>

<p>Thanks,</p>
<p>Webmail account team</p>
</body>
</head>

      </React.Fragment>
    );
  }
}


export default Mail6;