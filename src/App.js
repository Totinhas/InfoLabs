import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, Lab, Error404 } from "./pages";
import { labs } from "./functions";

function App() {
  const basePath = "/";
  return (
    <div className="App">
      <div>
        <div className="menu">
          <div>
            <h1 className="logo">
              <a href={basePath}>LABS</a>
            </h1>
          </div>
        </div>
        <Switch>
          <Route exact path={basePath}>
            <Home listOfLabs={labs} />
          </Route>
          <Route path={basePath + "lab/:id"}>
            <Lab labs={labs} />
          </Route>
          <Route path="*">
            <Error404></Error404>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
