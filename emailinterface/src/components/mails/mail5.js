import React, { Component } from "react";

class Mail5 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>Deine Mailbox ist fast voll.</p>

        <p>
          1969MB 2048MB
          <br />
          Momentane Größe Maximale Größe
          <br />
        </p>

        <p>
          Bitte reduzieren Sie Ihre Mailboxgröße. Löschen Sie nicht benötigte
          Elemente oder klicken Sie auf:
          <a href="javascript: void(0)">Outlook-Webanwendung</a>, um die
          Postfachgröße zu erhöhen.
        </p>
      </React.Fragment>
    );
  }
}

export default Mail5;
