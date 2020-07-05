import React, { Component } from "react";

class Mail4 extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <body>
          <div>
            <h3>Bulletin Alert!!</h3>
            <h3>Attention {this.props.userName}:</h3>
            <p>Bulletin Headline: Crime Suspect</p>
            <p>Sending Agency: Police</p>
            <p>Bulletin Time: 18:47</p>
            <p>Bulletin Case#: 11-04626</p>
            <p>Bulletin Author: Leroy Jethro #8847</p>
            <p>Sending User #: 2892</p>
            <p>
              <a href="https://www.google.com" target="_blank">
                To view the full bulletin alert click here
              </a>
            </p>
            <p>
              To unsubscribe from these emails click{" "}
              <a href="https://www.google.com" target="_blank">
                here
              </a>
            </p>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

Mail4.defaultProps = {
  sender: "PoliceOfGermany@police.com",
  date: "June 16, 2020, 08:13",
  subject: "Crime Report",
  capital: "P",
};

export default Mail4;
