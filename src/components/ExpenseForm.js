import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
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
        <input type="number" placeholder="Amount"></input>
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
