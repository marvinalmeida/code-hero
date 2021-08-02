import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchIcon } from "./search.svg";
import "./Search.css";

const Search = () => {
  const [text, setText] = useState("");
  const history = useHistory();

  function handleClick() {
    history.push(`/search?name=${text}`);
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <SearchIcon onClick={handleClick} />
    </div>
  );
};

export default Search;
