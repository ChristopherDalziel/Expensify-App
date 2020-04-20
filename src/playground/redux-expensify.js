import React from "react";
import { createStore, combineReducers } from "redux";

const ReduxExpensifyTest = () => {
  return (
    <div>
      <h1>Preparing Redux for Expensify</h1>
    </div>
  );
};

// All of the actions we need our reducers to handle
// ADD_EXPENSE
const addExpense = () => {
  type: "ADD_EXPENSE", 
  expense: {
    
  }
}

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer:

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters reducer

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filterReducer })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "test",
      description: "January rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],

  filter: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

export default ReduxExpensifyTest;
