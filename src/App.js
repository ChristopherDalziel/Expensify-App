import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";

// const routes = (
//   <BrowserRouter>
//     <Route exact path="/" component={ExpenseDashboardPage} />{" "}
//   </BrowserRouter>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
    </BrowserRouter>
  );
};

export default App;
