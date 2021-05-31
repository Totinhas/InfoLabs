import React from "react";
//import "./LabItem.css";

const LabItem = ({ title, tags, onClick, level }) => {
  return (
    <div className="LabItem" onClick={onClick}>
      <div>
        <h3>{title}</h3>

        <div class="levelInfo">
          {/* Icon? */}
          <p>{level}</p>
        </div>
      </div>

      <div>
        {tags.map((tag, index) => {
          return <span className="tags">{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default LabItem;
