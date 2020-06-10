import React from "react";
import "./App.css";
import EmailClient from "./components/emailClient.js";
import StartPage from "./components/startPage.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let username = "max mustermann";
  let emailAdress = "max_mustermann@example.com";

  const updateUserInfo = (adress, name) => {
    username = name;
    emailAdress = adress;
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
            <EmailClient emailAdress={emailAdress} userName={username} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
