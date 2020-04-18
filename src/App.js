import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

// const routes = (
//   <BrowserRouter>
//     <Route exact path="/" component={ExpenseDashboardPage} />{" "}
//   </BrowserRouter>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />

        <Route path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
