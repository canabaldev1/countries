import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ searchName, setSearchName }) {
  const handleSearchName = (e) => {
    const name = e.target.value;
    setSearchName(name);
  };

  return (
    <div>
      <label htmlFor="searchName"></label>
      <input
        value={searchName}
        onChange={handleSearchName}
        id="searchName"
        className={styles.searchName}
        type="text"
      />
    </div>
  );
}

export default SearchBar;
