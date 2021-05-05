import React from "react";
// import "./HomePage.css";

const Lab = ({ labContent }) => {
  return (
    <div className="Lab">
      <h1>{labContent.title}</h1>
      <p>
        {labContent.tags.map((tag, index) => {
          return <span>{tag} </span>;
        })}
      </p>
    </div>
  );
};

export default Lab;
