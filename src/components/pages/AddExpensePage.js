import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import ExpenseForm from "../ExpenseForm";
import { startAddExpense } from "../../actions/expenses";

const AddExpensePageContainer = styled.div`
  margin: 10px;
`;

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // The addExpense function we set up earlier takes an object with all of the values that the expense prop we're passing up is holding.
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <AddExpensePageContainer>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </AddExpensePageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
