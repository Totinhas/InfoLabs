import React, { useState } from "react";
import Select from "react-select";
import { LabItem } from "../../components";
import "./Home.css";

// import "./HomePage.css";

const Home = ({ listOfLabs, handleClickLabItem }) => {
  const options = [
    { label: "by Tag", value: "tag" },
    { label: "by Title", value: "title" },
  ];
  console.log(listOfLabs);
  const [filteredListOfLabs, setFilteredListOfLabs] = useState(listOfLabs);
  const [searchType, setSearchType] = useState({
    label: "by Tag",
    value: "tag",
  });

  const handleChange = (value) => {
    setSearchType(value);
  };

  const search = (event) => {
    const updatedFilteredListOfLabs = listOfLabs.filter((lab) => {
      switch (searchType.value) {
        case "title":
          return lab.title.includes(event.target.value);
          break;
        case "tag":
          let index = lab.metadata.tags.findIndex((element) =>
            element.includes(event.target.value)
          );
          return index > -1;
        default:
          break;
      }
    });

    setFilteredListOfLabs(updatedFilteredListOfLabs);
  };
  const selectStyle = {
    control: (styles) => {
      console.log(styles);
      return { ...styles, marginRight: "10px" };
    },
  };
  return (
    <div className="Home">
      <h2>Title</h2>

      <div id="searchArea">
        <div id="searchBar">
          <Select
            className="selectSearchBy"
            styles={selectStyle}
            options={options}
            value={searchType}
            onChange={(value) => handleChange(value)}
            defaultValue={{ label: "by Tag", value: "tag" }}
          />
          <input type="text" onChange={search}></input>
        </div>
        {/* <div id="totalLabs">
          <p>Total: 1240312 labs</p>
        </div>  */}
      </div>

      <div id="results">
        <ul>
          {filteredListOfLabs.map((lab, index) => {
            return (
              <LabItem
                key={index}
                title={lab.title}
                tags={lab.metadata.tags}
                level={lab.metadata.level}
                onClick={() => {
                  handleClickLabItem(lab.id);
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
