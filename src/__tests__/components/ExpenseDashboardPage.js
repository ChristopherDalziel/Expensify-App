import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/pages/ExpenseDashboardPage";

import toJSON from "enzyme-to-json";

test("Should render dashboard page correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
