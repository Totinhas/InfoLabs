import React from "react";
// import "./HomePage.css";

const Lab = ({}) => {
  const lab = { title: "carrot soup", tags: ["soup"] };
  return (
    <div className="Lab">
      <h1>{lab.title}</h1>
      <p>
        {lab.tags.map((tag, index) => {
          return <span>{tag} </span>;
        })}
      </p>
    </div>
  );
};

export default Lab;
