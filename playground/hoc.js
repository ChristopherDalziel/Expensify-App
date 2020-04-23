// Higher Order Component (HOC) - A component that renders another component
// The goal of a HOC is to reuse code
// Render Hijacking, Prop manipulation and abstract state

import React from "react";

const Info = (props) => (
  <div>
    <h1>HOC or Higher Order Component</h1>
    <p>Info? {props.info}</p>
  </div>
);

// Our first higher order component (WrappedComponent in this example = Info)
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please don't share!</p>}
      {/* Spreading the props here creates a js expression and has the effect of taking every key value pair object and passes them down as props */}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        "You're not authenticated to view this information"
      )}
    </div>
  );
};

// Wrapped component is passed in here
export const AdminInfo = withAdminWarning(Info);
export const AuthInfo = requireAuthentication(Info);
