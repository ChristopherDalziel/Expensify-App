import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const LoginContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPage = ({ startLogin }) => {
  return (
    <LoginContainer>
      <Button variant="outline-primary" onClick={startLogin}>
        Login
      </Button>
    </LoginContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
