import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { addExpense } from "../../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // The addExpense function we set up earlier takes an object with all of the values that the expense prop we're passing up is holding.
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
