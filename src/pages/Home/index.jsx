import React, { useState } from "react";
import Select from "react-select";
import { LabItem } from "../../components";

// import "./HomePage.css";

const Home = ({}) => {
  const listOfLabs = [
    { title: "carrot soup", tags: ["soup", "vegetable"] },
    { title: "homemade bread", tags: ["bread"] },
    { title: "bolognese", tags: ["meat", "italian"] },
    { title: "ramen", tags: ["soup", "japanese"] },
    { title: "garlic bread", tags: ["bread"] },
    { title: "tomato soup", tags: ["soup"] },
  ];
  const options = [
    { label: "by Tag", value: "tag" },
    { label: "by Title", value: "title" },
  ];
  const [selectedLab, setSelectedLab] = useState();
  const [filteredListOfLabs, setFilteredListOfLabs] = useState(listOfLabs);
  const [searchType, setSearchType] = useState({
    label: "by Tag",
    value: "tag",
  });
  const handleChange = (value) => {
    setSearchType(value);
  };
  const handleClickLabItem = (index) => {
    setSelectedLab = filteredListOfLabs[index];
  };
  const search = (event) => {
    const updatedFilteredListOfLabs = listOfLabs.filter((lab) => {
      switch (searchType.value) {
        case "title":
          return lab.title.includes(event.target.value);
          break;
        case "tag":
          let index = lab.tags.findIndex((element) =>
            element.includes(event.target.value)
          );
          return index > -1;
        default:
          break;
      }
    });

    setFilteredListOfLabs(updatedFilteredListOfLabs);
  };
  return (
    <div className="Home">
      <h2>Title</h2>
      <div id="searchBar">
        <div>
          <input type="text" onChange={search}></input>

          <Select
            options={options}
            value={searchType}
            onChange={(value) => handleChange(value)}
            defaultValue={{ label: "by Tag", value: "tag" }}
          />
        </div>
        <div></div>
      </div>
      <div id="results">
        <ul>
          {filteredListOfLabs.map((lab, index) => {
            return (
              <LabItem
                key={index}
                title={lab.title}
                tags={lab.tags}
                onClick={() => {
                  handleClickLabItem(index);
                }}
              ></LabItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
