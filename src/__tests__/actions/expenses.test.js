import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  removeExpense,
  editExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("Should set up remove expense action object", () => {
  const action = removeExpense({ id: "Test-ID" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "Test-ID",
  });
});

test("Should set up edit expense action object", () => {
  const action = editExpense("Test-ID", {
    note: "new note value",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "Test-ID",
    updates: {
      note: "new note value",
    },
  });
});

test("Should set up add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("Should add test to database and store", () => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this one is better",
    createdAt: 1000,
  };
  store.dispatch(startAddExpense(expenseData));
});

test("Should add expense with defaults to database and store", () => {});

// This test is not required
// test("should set up add expense action object with default values", () => {
//   const action = addExpense();

//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
