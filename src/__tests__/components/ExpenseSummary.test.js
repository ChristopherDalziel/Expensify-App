import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import toJSON from "enzyme-to-json";

test("Should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={245} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={2323224245} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
