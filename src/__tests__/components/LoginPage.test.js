import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import LoginPage from "../../components/pages/LoginPage";

test("Should render LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
