import React, { Component } from "react";
import "./MailsDefault.css";

class Mail5 extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <body>
          <p>Sehr geehrte Kunde,</p>

          <p>Sie haben (1) wichtige Nachricht!</p>

          <p>&nbsp;</p>

          <p>
            Nach mehreren erfolglosen Versuchen, Sie telefonisch &uuml;ber den
            Kundendienst zu erreichen, Wir haben Ihnen eine vertrauliche
            Nachricht in Ihrem Kundenbereich hinterlassen, um Ihren wichtige
            Informationen zu Ihrem Konto mitzuteilen. Wir laden Sie ein, es so
            bald wie m&ouml;glich zu lesen
          </p>

          <p>&nbsp;</p>

          <p>
            <a
              href="http://www.sparkasseösterreichonline.digital"
              class="internal-link"
              target="_blank"
              onMouseEnter={() => {
                this.props.insideEmailInfo(true, "InLink1");
              }}
              onMouseLeave={() => {
                this.props.insideEmailInfo(false, "InLink1");
              }}
              onMouseOver={() => {
                this.props.insideEmailInfo(true, "InLink1");
              }}
              onClick={() => {
                this.props.insideEmailInfo(true, "ClickedLink1");
              }}
            >
              http://www.sparkasseösterreichonline.digital
            </a>
          </p>

          <p>&nbsp;</p>

          <p>Freundliche Gr&uuml;&szlig;e</p>

          <p>Ihre Sparkasse</p>

          <p>&copy;2020 Sparkasse Bank Austria AG&nbsp;</p>
        </body>
      </div>
    );
  }
}

Mail5.defaultProps = {
  senderName: "Sparkasse AT",
  sender: "info.security@sparkasse.at",
  date: "June 01, 2020, 03:40",
  subject: "Wichtige Nachricht",
  capital: "S",
  keyID: 5,
  avatarColor: "red",
  unseen: true,
};

export default Mail5;
