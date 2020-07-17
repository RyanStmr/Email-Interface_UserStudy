import React, { Component } from "react";

class Mail7 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <p style={{ marginLeft: "13.5pt;" }}>Hello {this.props.userName},</p>

          <p style={{ marginLeft: "13.5pt;" }}>
            Please refer to the vital info I&#39;ve shared with you using Google
            Drive.&nbsp;
          </p>

          <p style={{ marginLeft: "13.5pt;" }}>
            Click{" "}
            <a href="https://www.google.com" target="_blank">
              https://google.com/drive/docs/file012345
            </a>{" "}
            and sign in to view details..
          </p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.5pt" }}>Regards.</p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.5pt" }}>
            CONFIDENTIALITY NOTICE:&nbsp; This e-mail and any transmitted files
            are private and confidential and are solely for the use of the
            recipient(s)&nbsp;to whom it is addressed.&nbsp; Any unauthorized
            review, use, disclosure, distribution or copying of this
            communication is strictly forbidden.&nbsp; If you have received this
            communication in error, please delete and immediately notify the
            sender via the e-mail return address.&nbsp; Thank you for your
            compliance.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>
            Please consider the environment before printing this e-mail.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.7pt" }}></p>
        </body>
      </React.Fragment>
    );
  }
}

Mail7.defaultProps = {
  sender: "drive@google.com",
  date: "June 17, 2020, 05:18",
  subject: "Shared document",
  capital: "G",
  keyID: 2,
};

export default Mail7;
