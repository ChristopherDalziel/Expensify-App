import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

// Regular Component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ExpenseListItem />
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// Function
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

// Higher order component
// export default connect((state) => {
//   return {
//     expenses: state.expenses,
//   };
// })(ExpenseList);

// Connect call that pulls our data together, the result of this is a brand new component which is our component with the props from the store
export default connect(mapStateToProps)(ExpenseList);
