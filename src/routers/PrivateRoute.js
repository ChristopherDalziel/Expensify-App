import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

// Creating our private routes for AppRouter

// component: Component is renaming it to a capital and ...rest creates the rest variable the holds the rest of the props off Route
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <div>
              <Header />
              <Component {...props} />
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // Using !! here flips the value from displaying id & undefined to true & false
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
