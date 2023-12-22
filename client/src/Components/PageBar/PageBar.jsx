import React from "react";
import { useSelector } from "react-redux";

function PageBar({ setPage, page }) {
  const countriesToShow = useSelector((state) => state.countriesToShow);
  const length = 10;

  const totalPages = Math.ceil(countriesToShow.length / length);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    console.log(event.preventDefaul);
    event.preventDefaul;
    const selectPage = Number(event.target.value);
    setPage(selectPage);
  };

  return (
    <div>
      {pages.map((p) => {
        return (
          <button
            value={p}
            onClick={handleClick}
            className={p === page ? "selectedPage" : "notSelectedPage"}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}

export default PageBar;
