import React from "react";
import styled from "@emotion/styled";
import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";
import ExpensesSummary from "../ExpensesSummary";

const DashboardContainer = styled.main`
  margin: 10px;
`;

const ExpenseDashboardPage = () => {
  return (
    <DashboardContainer>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </DashboardContainer>
  );
};

export default ExpenseDashboardPage;
