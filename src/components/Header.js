import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Expensify</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/create">Create</Link>
      <Link to="/edit">Edit</Link>
      <Link to="/help">Help</Link>
    </div>
  );
};

export default Header;
