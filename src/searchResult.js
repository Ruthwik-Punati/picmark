import { useState, memo } from "react";
import Slider from "./slider";
import { searchQueryValue, setSearchQueryValue } from "./values";

function SearchResult() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(searchQueryValue);

  console.log(searchQuery);
  return (
    <>
      <div className="searchBox">
        <input
          placeholder="search places"
          style={{ margin: "20px" }}
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        ></input>
        <button
          onClick={() => {
            setSearchQueryValue(inputValue);
            setSearchQuery(searchQueryValue);
          }}
        >
          Submit
        </button>
      </div>
      <Slider topic={searchQuery}></Slider>
    </>
  );
}

export default memo(SearchResult);
