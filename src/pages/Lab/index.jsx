import React, { useState } from "react";
import "./Lab.css";

const Lab = ({ labContent }) => {
  const [navState, setNavState] = useState(
    Array(labContent.steps.length).fill(false)
  );

  const handleStepToggle = (event) => {
    let newNavState = [...navState];
    newNavState[event.target.dataset.index] =
      !newNavState[event.target.dataset.index];
    setNavState(newNavState);
  };
  return (
    <div className="Lab">
      <div class="LabContent">
        <div class="LabInfo">
          <h1>{labContent.title}</h1>
          <p>{labContent.level}</p>
          <p class="LabTags">
            {labContent.metadata.tags.map((tag, index) => {
              return <span className="tags">{tag} </span>;
            })}
          </p>
        </div>

        <div class="LabNav">
          {labContent.steps.map((step, stepIndex) => {
            return (
              <div>
                <li className="step">
                  <a href={`#section${stepIndex}`} data-index={stepIndex}>
                    {step.text}
                  </a>
                  {step.subSteps.length > 0 ? (
                    <img
                      onClick={handleStepToggle}
                      data-index={stepIndex}
                      class="arrowDown"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMTEgNTEyLjAxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA1Ljc1NSwxMjMuNTkyYy04LjM0MS04LjM0MS0yMS44MjQtOC4zNDEtMzAuMTY1LDBMMjU2LjAwNSwzNDMuMTc2TDM2LjQyMSwxMjMuNTkyYy04LjM0MS04LjM0MS0yMS44MjQtOC4zNDEtMzAuMTY1LDAgICAgcy04LjM0MSwyMS44MjQsMCwzMC4xNjVsMjM0LjY2NywyMzQuNjY3YzQuMTYsNC4xNiw5LjYyMSw2LjI1MSwxNS4wODMsNi4yNTFjNS40NjIsMCwxMC45MjMtMi4wOTEsMTUuMDgzLTYuMjUxbDIzNC42NjctMjM0LjY2NyAgICBDNTE0LjA5NiwxNDUuNDE2LDUxNC4wOTYsMTMxLjkzMyw1MDUuNzU1LDEyMy41OTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                    />
                  ) : null}
                </li>

                {navState[stepIndex] &&
                  step.subSteps.map((subStep, subStepIndex) => {
                    return (
                      <li className="subStep">
                        <a href={`#section${stepIndex}${subStepIndex}`}>
                          {subStep.text}
                        </a>
                      </li>
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div class="LabText">
          {labContent.steps.map((step, stepIndex) => {
            return (
              <div className="stepH2">
                <div class="h2Content">
                  <h2 id={`section${stepIndex}`}>{step.text}</h2>
                  <p>{step.raw}</p>
                </div>

                {step.subSteps.map((subStep, subStepIndex) => {
                  return (
                    <div className="SubStepH3">
                      <div class="h3Content">
                        <h3 id={`section${stepIndex}${subStepIndex}`}>
                          {subStep.text}
                        </h3>
                        <p>{subStep.raw}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lab;
