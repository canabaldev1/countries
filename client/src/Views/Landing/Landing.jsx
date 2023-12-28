import React from "react";
import { Link } from "react-router-dom";

function Landing(params) {
  return (
    <div>
      <Link to="/home">
        <button
          onClick={(e) => {
            // e.preventDefault();
          }}
        >
          HOME
        </button>
      </Link>
    </div>
  );
}

export default Landing;
