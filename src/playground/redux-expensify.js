import React from "react";
import { createStore, combineReducers } from "redux";

const ReduxExpensifyTest = () => {
  return (
    <div>
      <h1>Preparing Redux for Expensify</h1>
    </div>
  );
};

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
