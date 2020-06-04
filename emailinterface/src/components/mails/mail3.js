import React, { Component } from "react";

class Mail3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Mail3">
       
        <head>
	<title></title>
</head>
<body>
<h1>Microsoft Account</h1>

<p>Dear User,</p>

<p>Someone in Bogot&Atilde;&iexcl; Colombia attempted to log into your account several times. If you believe this was fraudulent activity please report it&nbsp;<a href="{{.URL}}">here</a>.</p>

<p>If you do not believe this to be fraudulent activity you may ignore this message</p>

<p>&nbsp;</p>

<p>Sincerely,</p>

<p>Office365 @ COMPANY.com</p>
</body>

							
   
        </div>
        </React.Fragment>
    );
 }
}

export default Mail3;