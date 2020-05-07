import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

import toJSON from "enzyme-to-json";

test("Should render expense list item with data", () => {
  const wrapper = shallow(
    <ExpenseListItem
      description={expenses[0].description}
      amount={expenses[0].amount}
      createdAt={expenses[0].createdAt}
      id={expenses[0].id}
    />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
