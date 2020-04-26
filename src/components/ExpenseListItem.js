import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense, editExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    {description ? (
      <>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
        <p>
          {amount} - {createdAt}
        </p>
        <button
          onClick={() => {
            dispatch(removeExpense({ id }));
          }}
        >
          Remove
        </button>{" "}
      </>
    ) : (
      ""
    )}
  </div>
);

export default connect()(ExpenseListItem);
