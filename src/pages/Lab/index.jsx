import React from "react";
import "./Lab.css";

const Lab = ({ labContent }) => {
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
            let depthClass;
            return (
              <div>
                <li className="step">
                  <a href={`#section${stepIndex}`}>{step.text}</a>
                </li>
                {step.subSteps.map((subStep, subStepIndex) => {
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
