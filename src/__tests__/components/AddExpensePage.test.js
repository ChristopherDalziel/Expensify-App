import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/pages/AddExpensePage";
import expenses from "../fixtures/expenses";

import toJSON from "enzyme-to-json";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("Should render add expense page correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
