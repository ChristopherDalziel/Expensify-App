import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";
import Button from "react-bootstrap/Button";

export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <Button variant="outline-primary" onClick={startLogin}>
        Login
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
