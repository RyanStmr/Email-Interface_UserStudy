import React from "react";
import "./App.css";
import EmailClient from "./components/emailClient.js";
import StartPage from "./components/startPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let userInfo = {
    userName: "max mustermann",
    emailAdress: "max_mustermann@example.com",
  };

  const updateUserInfo = (adress, name) => {
    userInfo.userName = name;
    userInfo.emailAdress = adress;
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <StartPage updatedData={updateUserInfo} />}
        />
        <Route
          path="/EmailClient"
          render={() => (
            <EmailClient UserInfo={userInfo}></EmailClient> //emailAdress={emailAdress} userName={username} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
