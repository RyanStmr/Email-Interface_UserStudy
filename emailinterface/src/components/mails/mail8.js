import React, { Component } from "react";

class Mail8 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

<head>
	<title></title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
<p>&nbsp;</p>

<h1 style="color: rgb(68, 114, 196);"><b>LinkedIn</b></h1>

<h2 style="color: rgb(68, 114, 196);">REMINDER</h2>

<p>&nbsp;</p>

<h3><b>Invitation reminders/:&nbsp;&nbsp;&nbsp; From&nbsp; &nbsp;<a href="{{.URL}}">Steve Donaghy</a></b></h3>

<h3><b>There are a total of </b><strong><b>4</b><b> </b></strong><b>other messages awaiting your reply.&nbsp;&nbsp;<a href="{{.URL}}">Go to INBOX now</a>.</b></h3>

<p><b>&nbsp;</b></p>

<p><b>Do not want to receive email notifications? Login to your LinkedIn account to <a href="{{.URL}}">unsubscribe.</a><br />
LinkedIn values your privacy.&nbsp; At no time has LinkedIn made your email address available to any other LinkedIn users without your permission.&nbsp;&nbsp;<br />
c2013, LinkedIn Corporation.</b></p>

<p>&nbsp;</p>

<p>{{.Tracker}}</p>
</div>
</body>
);
}
}


export default Mail8;