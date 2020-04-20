import React from "react";
import { createStore, combineReducers } from "redux";
import uuid from "uuid/v4";

const ReduxExpensifyTest = () => {
  return (
    <div>
      <h1>Preparing Redux for Expensify</h1>
    </div>
  );
};

// All of the actions we need our reducers to handle
// ADD_EXPENSE
// The values other than id are going to come from the user and for that reason need to be passed in
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

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
    case "ADD_EXPENSE":
      // state.concat(action.expense); > the return line is essentially saying this but using the ES6 spread operator.
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        // If the ID is not equal to the action.id, if they're not equal it will be true and they will be kept, if not they will return false and be filtered out.
        return id !== action.id;
      });
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

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
