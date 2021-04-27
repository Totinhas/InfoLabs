import React from "react";
//import "./LabItem.css";

const LabItem = ({ title, tags }) => {
  return (
    <div className="LabItem">
      <h3>{title}</h3>
      <p>
        {tags.map((tag, index) => {
          return <span>{tag} </span>;
        })}
      </p>
    </div>
  );
};

export default LabItem;
