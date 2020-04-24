import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilters = (props) => (
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
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
