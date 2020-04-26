import React from "react";

const EditExpensePage = (props) => {
  return (
    <>
      <h1>Edit Expense</h1>
      <p>Editing expense {props.match.params.id}</p>
    </>
  );
};

export default EditExpensePage;
