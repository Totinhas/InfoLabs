import React from "react";
//import "./LabItem.css";

const LabItem = ({ title, tags, onClick }) => {
  return (
    <div className="LabItem" onClick={onClick}>
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
