import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={(e) => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect()(ExpenseListItem);
