import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Home, Lab } from "./pages";
import { labs } from "./functions";

function App() {
  const history = useHistory();
  const [selectedLab, setSelectedLab] = useState();

  const handleClickLabItem = (index) => {
    // alternative find
    // for (let i = 0; i < labs.length; i++) {
    //   if (labs[i].id == index) {
    //     lab = labs[i];
    //     break;
    //   }
    // }
    const lab = labs.find((lab) => lab.id === index);
    setSelectedLab(lab);
    console.log(index, lab);
    history.push("/lab");
  };

  return (
    <div className="App">
      <div>
        <div class="menu">
          <nav>
            <div>
              <h1>LABS</h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home&nbsp;</Link>
              </li>
              <li>
                <Link to="/lab">Lab</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home listOfLabs={labs} handleClickLabItem={handleClickLabItem} />
          </Route>
          <Route path="/lab">
            <Lab labContent={selectedLab} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
