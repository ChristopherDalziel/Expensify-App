import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import AppRouter, { history } from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";

// Playground Imports
// import Redux101 from "../playground/redux-101";
// import Destructuring from "../playground/Destructuring-ES6";
// import ReduxExpensifyTest from "../playground/redux-expensify";
// import { AdminInfo } from "../playground/hoc";
// import { AuthInfo } from "../playground/hoc";
// import PromisesComponent from "./playground/promises";

// Store
import configureStore from "./store/configureStore";
// Actions
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
// Selector
import getVisibleExpenses from "./selectors/expenses";
// Store config
const store = configureStore();
// Dispatch
// store.dispatch(addExpense({ description: "Water bill", amount: 5000 }));
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 109500 }));
// store.dispatch(addExpense({ description: "Rent bill", amount: 109500 }));

// store.dispatch(setTextFilter("Water"));
// Set state
const state = store.getState();
// Display visible expenses
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// To console
// console.log(visibleExpenses);

// console.log(store.getState());

// Setting up our Redux provider, the prop is attaching it to the store.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Only run if user is logged in
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
