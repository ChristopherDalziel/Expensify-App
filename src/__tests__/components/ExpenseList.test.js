import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

import toJSON from "enzyme-to-json";

test("Should render expense list with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render expense list without expenses", () => {});
