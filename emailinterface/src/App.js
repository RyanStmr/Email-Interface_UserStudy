import React from "react";
import "./App.css";
import UserInterface from "./components/userInterface.js";
import StartPage from "./components/startPage.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StartPage}></Route>
        <Route path="/UserInterface" component={UserInterface} />
      </Switch>
    </Router>
  );
}

export default App;
