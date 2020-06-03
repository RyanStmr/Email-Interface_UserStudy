import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartPage extends Component {
  state = {};
  render() {
    return (
      <div className="StartPage">
        <h1>Startpage</h1>
        <p>Welcome to our study: You will have to do this and that</p>
        <Link to="/UserInterface">
          <button>Start Userstudy</button>
        </Link>
      </div>
    );
  }
}

export default StartPage;
