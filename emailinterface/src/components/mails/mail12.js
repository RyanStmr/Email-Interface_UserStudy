import React, { Component } from "react";

class Mail12 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <div>
          
<head>
</head>
<body>
  <h3>Bulletin Alert!!</h3>
  <h3>Attention:</h3>
<p>Bulletin Headline: Crime Suspect</p>
<p>Sending Agency: Police</p>
<p>Bulletin Time: 18:47</p>
<p>Bulletin Case#: 11-04626</p>
<p>Bulletin Author: Leroy Jethro #8847</p>
<p>Sending User #: 2892</p>
<p><a href="{{.URL}}">To view the full bulletin alert click here</a></p>
<br>
<p>To unsubscribe from these emails click <a href="{{.URL}}">here</a></p>
</br>
</body>

          </div>
      </React.Fragment>
      );
    }
  }
  
  
  export default Mail12;