import React from "react";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";

import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import LoginPage from "../components/pages/LoginPage";

import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    // If we use BrowserRouter, it automatically creates 'browser history' which allows us to use .history to re-route a user throughout our app as long as they're within a component, we're going to change this so we can access it anywhere.
    // Now using Router instead of BrowserRouter we're allowed to give our own router value, in our case it will be the history variable we just created and now we can use it within other files.
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
