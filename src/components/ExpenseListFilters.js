import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = (props, state) => (
  <div>
    {/* This input is reading and writing from the store! */}
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        // Attaching our input to our action, dispatch will change the value in our store.
        props.dispatch(setTextFilter(e.target.value));
      }}
    ></input>
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === "date") {
          return props.dispatch(sortByDate());
        } else if (e.target.value === "amount") {
          return props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
