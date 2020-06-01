import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import styled from "@emotion/styled";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from "../actions/filters";

const InputContainer = styled.div`
  width: 25vw;
`;

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === "date") {
      return this.props.sortByDate();
    } else if (e.target.value === "amount") {
      return this.props.sortByAmount();
    }
  };

  render() {
    return (
      <>
        <p>Filter Text:</p>
        <InputGroup>
          <InputContainer>
            {/* This input is reading and writing from the store! */}
            <FormControl
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            ></FormControl>
          </InputContainer>

          <DropdownButton
            title="Sort By"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <Dropdown.Item value="date">Date</Dropdown.Item>
            <Dropdown.Item value="amount">Amount</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <p>Date Range:</p>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="placeholder-id-1"
          endDate={this.props.filters.endDate}
          endDateId="placeholder-id-2"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
        <br />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
