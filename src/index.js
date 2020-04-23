import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Playground Imports
// import Redux101 from "../playground/redux-101";
// import Destructuring from "../playground/Destructuring-ES6";
// import ReduxExpensifyTest from "../playground/redux-expensify";
// import { AdminInfo } from "../playground/hoc";
// import { AuthInfo } from "../playground/hoc";

// Store
import configureStore from "./store/configureStore";
// Actions
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// Selector
import getVisibleExpenses from "./selectors/expenses";
// Store config
const store = configureStore();
// Dispatch
store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("Water"));
// Set state
const state = store.getState();
// Display visible expenses
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// To console
console.log(visibleExpenses);

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AuthInfo isAuthenticated={true} info="This is the info" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
