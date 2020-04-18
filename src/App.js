import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";

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
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </BrowserRouter>
  );
};

export default App;
