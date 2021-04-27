import React, { useState } from "react";
import { LabItem } from "../../components";

// import "./HomePage.css";

const Home = ({}) => {
  const listOfLabs = [
    { title: "carrot soup", tags: ["soup"] },
    { title: "homemade bread", tags: ["bread"] },
    { title: "bolognese", tags: ["meat", "italian"] },
    { title: "ramen", tags: ["soup", "japanese"] },
    { title: "garlic brad", tags: ["bread"] },
    { title: "tomato soup", tags: ["soup"] },
  ];
  const [filteredListOfLabs, setFilteredListOfLabs] = useState(listOfLabs);
  const search = (event) => {
    const updatedFilteredListOfLabs = listOfLabs.filter((lab) => {
      return lab.title.includes(event.target.value);
    });

    setFilteredListOfLabs(updatedFilteredListOfLabs);
  };
  return (
    <div className="Home">
      <h2>Title</h2>
      <div id="searchBar">
        <div>
          <input type="text" onChange={search}></input>
        </div>
        <div></div>
      </div>
      <div id="results">
        <ul>
          {filteredListOfLabs.map((lab, index) => {
            return (
              <LabItem key={index} title={lab.title} tags={lab.tags}></LabItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
