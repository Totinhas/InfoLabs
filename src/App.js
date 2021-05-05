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

function App() {
  const labs = [
    { id: "aa", title: "carrot soup", tags: ["soup", "vegetable"] },
    { id: "bb", title: "homemade bread", tags: ["bread"] },
    { id: "cc", title: "bolognese", tags: ["meat", "italian"] },
    { id: "dd", title: "ramen", tags: ["soup", "japanese"] },
    { id: "ee", title: "garlic bread", tags: ["bread"] },
    { id: "ff", title: "tomato soup", tags: ["soup"] },
  ];
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lab">Lab</Link>
          </li>
        </ul>

        <hr />

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
