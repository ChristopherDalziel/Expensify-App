import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink exact activeClassName="isActive" to="/">
        Dashboard
      </NavLink>
      <NavLink activeClassName="isActive" to="/create">
        Create
      </NavLink>
      <NavLink activeClassName="isActive" to="/edit">
        Edit
      </NavLink>
      <NavLink activeClassName="isActive" to="/help">
        Help
      </NavLink>
    </div>
  );
};

export default Header;
