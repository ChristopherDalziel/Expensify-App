import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import styled from "@emotion/styled";

const ExpenseListItemContainer = styled.div`
  margin: 10px;
`;

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <ExpenseListItemContainer>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format("$0,0.00")} -
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </ExpenseListItemContainer>
);

export default ExpenseListItem;
