import React, { Component } from "react";

class Mail2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <p>
            Attention: {this.props.userName}
            <br />
            <br />
            <strong>RE: CASE # 97540486</strong>
            <br />
            <br />
            The Better Business Bureau has been recorded the above said
            reclamation from one of your customers in regard to their business
            contacts with you.&nbsp; The detailed description of the
            customer&rsquo;s uneasiness are available by clicking the link
            below.&nbsp; Please pay attention to this question and let us know
            about your judgement as soon as possible.
            <br />
            <br />
            We pleasantly ask you to overview{" "}
            <a href="https://www.google.com" target="_blank">
              APPEAL REPORT
            </a>{" "}
            to reply on this complaint.
            <br />
            <br />
            We await to your prompt rebound.
            <br />
            <br />
            WBR
            <br />
            Mark Andrews
            <br />
            Dispute Consultant
            <br />
            Better Business Bureau
            <br />
            <br />
          </p>
        </body>
      </React.Fragment>
    );
  }
}

Mail2.defaultProps = {
  sender: "m.andrews@business.com",
  date: "6/15/2020 11:25:00",
  subject: "RE: CASE # 97540486",
  capital: "M",
};

export default Mail2;
