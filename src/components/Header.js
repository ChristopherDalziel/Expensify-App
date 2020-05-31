import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = ({ startLogout }) => {
  return (
    <Navbar>
      <h1>Expensify</h1>
      <Nav.Item>
        <Nav.Link as={NavLink} exact activeClassName="isActive" to="/dashboard">
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} activeClassName="isActive" to="/create">
          Create
        </Nav.Link>
      </Nav.Item>
      <Nav.Link onClick={startLogout}>Logout</Nav.Link>
    </Navbar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
