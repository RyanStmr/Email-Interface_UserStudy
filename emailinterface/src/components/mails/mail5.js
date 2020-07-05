import React, { Component } from "react";

class Mail5 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <p style={{ marginLeft: "13.5pt" }}>
            Hi {this.props.userName},<br />
            <br />
            Your package arrived at the post office. Here is your Shipping
            Document/Invoice and copy of DHL receipt for your tracking which
            includes the bill of lading and DHL tracking number, the new
            Import/Export policy supplied by DHL Express. Please kindly check
            the attached to confirm accordingly if your address is correct,
            before we submit to our outlet office for dispatch to your
            destination.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>
            <strong>
              Label Number: E727D5151D
              <br />
              Class: Package Services
              <br />
              Service(s): Delivery Confirmation
              <br />
              Status: eNotification sent
            </strong>
          </p>

          <p>
            <a href="https://www.google.com" target="_blank">
              View or download here
            </a>{" "}
            for the full statement information and a full description of
            package.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>
            Your item will arrive from 2-5 days time.
            <br />
            We would like to thank you for using the services of DHL Express.
            <br />
            &nbsp;
          </p>

          <p style={{ marginLeft: "13.7pt" }}>{}</p>
        </body>
      </React.Fragment>
    );
  }
}

Mail5.defaultProps = {
  sender: "noreplyit@dhl.de",
  date: "May 18, 2020, 5:45",
  subject: "Delivery Confirmation",
  capital: "DHL",
};

export default Mail5;
