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
  wrapper.find("button").simulate("click");
  expect(startLogoutSpy).toHaveBeenCalledTimes(1);
});

// test("Should call onSubmit prop for validation", () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(
//     <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
//   );
//   wrapper.find("form").simulate("submit", { preventDefault: () => {} });
//   expect(wrapper.state("error")).toBe("");
//   expect(onSubmitSpy).toHaveBeenLastCalledWith({
//     description: expenses[0].description,
//     amount: expenses[0].amount,
//     note: expenses[0].note,
//     createdAt: expenses[0].createdAt,
//   });
// });
