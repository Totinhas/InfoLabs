import React from "react";
// import "./HomePage.css";

const Lab = ({ labContent }) => {
  return (
    <div className="Lab">
      <div>
        <h1>{labContent.title}</h1>
        <p>{labContent.level}</p>
        <p>
          {labContent.tags.map((tag, index) => {
            return <span>{tag} </span>;
          })}
        </p>
        {labContent.sections.map((section, index) => {
          return <p id={`section${index}`}>{section.md}</p>;
        })}
      </div>
      <nav>
        {labContent.sections.map((section, index) => {
          let depthClass;
          let anchorSection;
          switch (section.depth) {
            case 2:
              depthClass = "section";
              break;
            case 3:
              depthClass = "subSection";
              break;
          }
          return (
            <li className={depthClass}>
              <a href={`#section${index}`}>{section.title}</a>
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default Lab;
