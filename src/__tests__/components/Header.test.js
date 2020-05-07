import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import Header from "../../components/Header";
// import { render } from "@testing-library/react";

test("Should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").length).toBe(1);
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
