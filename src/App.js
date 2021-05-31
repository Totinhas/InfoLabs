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
    {
      id: "example",
      metadata: {
        level: "Intermediate",
        tags: "tag1,tag2,tag3",
        status: "Published",
      },
      title: "Title",
      steps: [
        {
          text: "Overview",
          subSteps: [
            {
              text: "Context",
              raw: "Context of the problem.\n\n",
            },
            {
              text: "Problem",
              raw: "What are we trying to solve?\n\n",
            },
            {
              text: "Solution",
              raw: "How are we going to solve the problem?\n\n",
            },
            {
              text: "Prerequisites",
              raw: "- Access\n- Tools\n- Other labs\n- Prior knowledge\n\n",
            },
            {
              text: "Important",
              raw: "Any important notes\n\n",
            },
          ],
          raw: "Explanation of what is going to be achieved, what are the prerequisites and important notes.\n\n",
        },
        {
          text: "Step 1",
          subSteps: [
            {
              text: "Step 1.1",
              raw: 'A sub step, the index will show up to this level only\n\n```js\nconst crypto = require("crypto");\n\nfunction hash7(string) {\n  const hash = crypto.createHash("sha256");\n  hash.update(string);\n  return hash.digest("hex").substring(0, 7);\n}\n```\n\n',
            },
          ],
          raw: "The actual steps to achieve the goal of the lab. Feel free to use the full potential of markdown.\n\n",
        },
        {
          text: "Step 2",
          subSteps: [
            {
              text: "Step 2.1",
              raw: "A sub step, the index will show up to this level only\n\n",
            },
            {
              text: "Step 2.2",
              raw: "",
            },
          ],
          raw: "The actual steps to achieve the goal of the lab. Feel free to use the full potential of markdown.\n\n",
        },
        {
          text: "Step 3",
          subSteps: [
            {
              text: "Step 3.1",
              raw: "A sub step, the index will show up to this level only\n\n",
            },
            {
              text: "Step 3.2",
              raw: "A sub step, the index will show up to this level only\n\n",
            },
            {
              text: "Step 3.3",
              raw: "A sub step, the index will show up to this level only\n\n",
            },
          ],
          raw: "A sub step, the index will show up to this level only\n\n",
        },
        {
          text: "Verify",
          subSteps: [],
          raw: "Steps to verify the solution.\n\n",
        },
        {
          text: "Cleanup",
          subSteps: [],
          raw: "Steps to cleanup all live resources, like deployments and aws resources.\n\n",
        },
        {
          text: "Summary",
          subSteps: [
            {
              text: "Resources",
              raw: "links to external resources\n\n- [one](one)\n- [two](two)\n- [three](three)\n\n",
            },
            {
              text: "Next Steps",
              raw: "- Other labs\n- Documentation\n",
            },
          ],
          raw: "A recap what has been achieved and next steps.\n\n",
        },
      ],
      images: [],
    },
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
            <Link to="/">Home&nbsp;</Link>
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
