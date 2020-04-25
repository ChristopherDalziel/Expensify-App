import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// const date = new Date();
const now = moment();

console.log(now.format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return { description };
    });
  };

  onTextAreChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return { note };
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    // Regular expressions, setting restrictions on what we will allow to be set in our state (Checkout regex101.com)
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return { amount };
      });
    }
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        ></input>
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        ></input>
        <SingleDatePicker />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onTextAreChange}
        ></textarea>
        <button>Add Expense</button>
      </form>
    );
  }
}
