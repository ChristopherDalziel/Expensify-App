import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/pages/NotFoundPage";

import toJSON from "enzyme-to-json";

test("Should render page not found page correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
