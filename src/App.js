import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ExpenseDashboardPage from "./components/ExpenseDashboardPage";

// const routes = (
//   <BrowserRouter>
//     <Route exact path="/" component={ExpenseDashboardPage} />{" "}
//   </BrowserRouter>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ExpenseDashboardPage} />{" "}
    </BrowserRouter>
  );
};

export default App;
