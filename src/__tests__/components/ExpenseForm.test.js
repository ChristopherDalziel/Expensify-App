import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

import toJSON from "enzyme-to-json";

test("Should render expense form correct", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render expense form with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("Form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should set description on input change", () => {
  const value = "test description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("FormControl").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});

test("Should set note on text area change", () => {
  const value = "test area test";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("FormControl").at(2).simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
});

test("Should set amount if valid input", () => {
  const value = "12.95";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("FormControl").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("Should not set amount if invalid input", () => {
  const value = "13.666";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("FormControl").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

// test("Should call onSubmit prop for validation", () => {
//   const onSubmitSpy = jest.fn();
//   onSubmitSpy();
//   expect(onSubmitSpy).toHaveBeenCalled();
// });

test("Should call onSubmit prop for validation", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("Form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("Should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange");
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calender focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused,
  });
  expect(wrapper.state("calenderFocused")).toEqual(true);
});
