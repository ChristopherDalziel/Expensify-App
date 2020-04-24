import React from "react";
import { connect } from "react-redux";

// Regular Component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

// Function
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
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
