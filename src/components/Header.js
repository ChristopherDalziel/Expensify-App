import React from "react";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default Header;
