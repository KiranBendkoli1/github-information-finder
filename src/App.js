import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./Home";
import Repositories from "./Repositories";
import Navbar from "./Navbar";
import About from "./About";

function App() {

  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Repos/:userName">
        <Repositories />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
