import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { addExpense } from "../../actions/expenses";

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          // The addExpense function we set up earlier takes an object with all of the values that the expense prop we're passing up is holding.
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
