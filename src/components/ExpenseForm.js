import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

// const date = new Date();
// const now = moment();

// console.log(now.format("MMM Do YYYY"));

const FormContainer = styled.div`
  margin: 10px;
  width: 50vw;
`;

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      // On the amount state, if we're passing it back from an expense we need to convert it back from a number to a string
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      // The createdAt state needs to take in the timestamp of the expense not the current time.
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: "",
    };
  }

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
    // If there is no amount or if the amount matches set a new state (This allows the user to remove their input, without this you cannot.)
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return { amount };
      });
    }
  };

  onDateChange = (createdAt) => {
    // If a there is a createdAt value, use this.setState, if there is not.. do nothing. This prevents the user from removing the date entirely.
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide a description and an amount",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        // We need to convert amount into the correct type, by converting it from a string. Float keeps the decmimal places, and setting the 10 afterwards ensures we're in base 10. Since we're working in cents we need to multiply by 100.
        amount: parseFloat(this.state.amount, 10) * 100,
        // Value of is a moment function and allows us to format the time/date correctly
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <Form.Label>Expense Description</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></Form.Control>
          <Form.Label>Expense Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          ></Form.Control>
          <Form.Label>Expense Date</Form.Label>
          <br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <Form.Label>Expense Notes</Form.Label>
          <Form.Control
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onTextAreChange}
          ></Form.Control>
          <br />
          <Button variant="outline-primary" type="submit">
            Add Expense
          </Button>
        </Form>
      </FormContainer>
    );
  }
}
