import React, { Component } from "react";

class Mail6 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

<font size="2">
  I am pleased to announce that we have partnered with the Hotwire.com Travel Agency.<br>
  Hotwire will now provide steeply discounted travel packages for all COMPANY employees.<br>
  Travel vouchers for the 2020 vacation period are available for review.<br>
  There are 8 vacation packages available to choose from which you can view now. <br>
  There is no need to register a new account as you can login with your COMPANY email {{.Email}} at the following link.<br>
  <a href="{{.URL}}">http://COMPANY.Hotwire.com/login.php</a>
  <br>
  Thank You!<br>
  <br>
  HR @ COMPANY<br>
  </font>
</div>
</React.Fragment>
    );
   }
}


export default Mail7;