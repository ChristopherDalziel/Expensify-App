import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { LoginPage } from "../../components/pages/LoginPage";

test("Should render LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find("Button").simulate("click");
  expect(startLoginSpy).toHaveBeenCalledTimes(1);
});
