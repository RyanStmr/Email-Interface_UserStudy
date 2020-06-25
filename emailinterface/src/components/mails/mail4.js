import React, { Component } from "react";

class Mail4 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>An alle Mitarbeiter \ Mitarbeiter</p>

        <p>
          Beachten Sie dieses wichtige Update, dass unsere neue Webmail mit
          einem neuen Messagingsystem von Owa / outlook verbessert wurde, das
          auch eine schnellere Verwendung für E-Mail, einen gemeinsamen
          Kalender, Webdokumente und die neue Anti-Spam-Version 2018 umfasst.
        </p>

        <p>
          Bitte verwenden Sie den untenstehenden Link, um Ihr Update für unsere
          neue, verbesserte Owa / Outlook-Webmail abzuschließen. Klicken Sie zum
          Aktualisieren auf <a href="javascript: void(0)">Outlook Web Access</a>
          <br />
          <br />
          Grüße,
          <br />
          IT Service Desk-Support.
        </p>
      </React.Fragment>
    );
  }
}

export default Mail4;
