import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";

test("Should render header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should call startLogout on button click", () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find("NavLink").at(2).simulate("click");
  expect(startLogoutSpy).toHaveBeenCalledTimes(1);
});
