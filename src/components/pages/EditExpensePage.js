import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import ExpenseForm from "../ExpenseForm";
import { startRemoveExpense, startEditExpense } from "../../actions/expenses";

const EditExpenseItemsMargin = styled.div`
  margin: 10px;
`;

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <EditExpenseItemsMargin>
          <h1>Edit Expense</h1>
        </EditExpenseItemsMargin>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <EditExpenseItemsMargin>
          <Button variant="primary" onClick={this.onRemove}>
            Remove
          </Button>
        </EditExpenseItemsMargin>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
