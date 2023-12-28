import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/activity">Activities</Link>
      </li>
      <li>
        <Link to="/activity/create">Create Activity</Link>
      </li>
      {/* <li>
        <Link></Link>
      </li> */}
    </ul>
  );
}

export default NavBar;
