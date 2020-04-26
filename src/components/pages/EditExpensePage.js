import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <>
      <h1>Edit Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log("Updated", expense);
        }}
      />
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
