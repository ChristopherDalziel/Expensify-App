import React from "react";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button>Remove</button>
  </div>
);

export default ExpenseListItem;
