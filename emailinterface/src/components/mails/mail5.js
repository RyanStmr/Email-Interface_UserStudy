import React, { Component } from "react";

class Mail5 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
<div>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
</head>
<body style="background-color:#A9A9A9"></body>
<div class="container" >
  <div class="container" style="background-color:#FFF;">
    <br></br>
    <p>This email is being sent to all employees with a company email address. If someone on your team does not have an company email, please refer them to our intranet to read this and other company wide communications. If you have issues accessing our intranet, please use the attached instructions.</p>
    <h1>Breaking News</h1>
    <h3>What's been happening at our company?</h3>
    <p>We are very proud to talk about what has been happening at our company. There is so much going on to be proud of in multiple divisions and across the globe. But what make this email more important aside from showing you what is going on in other departments is discussing how this will effect you.</p>
    <p>We want to make sure that no employee feels left out because we value you.</p>
    <p>I'm sure you're eager to hear about what's going on at our company, so go ahead and click the link below to read about what's going on. We appreciate your time and continued dedication as an employee at our company.</p>
    <p>Thank you for taking the time to read this email and for all the contributions you've made to our company. Remember you are a valued employee here and we look forward to hearing from you in the future</p>
    <h4><a href={{URL}}>Exciting News</a></h4>
    <br></br><hr>
    <p>Best Regards:</p>
    <p>The news Team</p>
    <p></p>
  <div></div>
  </hr>
  </div>
</div>
</div>
      </React.Fragment>
    );
  }
}


export default Mail5;