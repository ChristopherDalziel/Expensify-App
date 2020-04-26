import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";

const AddExpensePage = () => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense);
        }}
      />
    </div>
  );
};

export default AddExpensePage;
