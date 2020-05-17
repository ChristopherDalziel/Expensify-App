import React from "react";
import { connect } from "react-dom";
import numeral from "numeral";

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 0 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling ${formattedExpensesTotal}
      </h1>
    </div>
  );
};

export default ExpensesSummary;
