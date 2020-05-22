import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/pages/AddExpensePage";
import expenses from "../fixtures/expenses";

import toJSON from "enzyme-to-json";

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("Should render addExpense page correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
