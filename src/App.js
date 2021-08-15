import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, Lab, Error404 } from "./pages";
import { getLabsData } from "./functions";

function App() {
  const basePath = "/";
  const [labsData, setLabsData] = useState([]);
  useEffect(() => {
    // console.log("APP", "useEffect");
    getLabsData()
      .then(function (response) {
        // console.log(response.data);
        setLabsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
            <Home listOfLabs={labsData} />
          </Route>
          <Route path={basePath + "lab/:id"}>
            <Lab labs={labsData} />
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
