import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // The arguments need to match the expense action
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
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
