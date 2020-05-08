import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

import toJSON from "enzyme-to-json";

test("Should render expense form correct", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render expense form with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
