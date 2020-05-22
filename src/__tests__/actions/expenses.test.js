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
  const action = startAddExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

// This is an async test, when we are creating an async test we need to let our test suite know, otherwise it will just pass or fail without waiting for the asynchronous calls, to do this we pass in done, our test is not complete until we call done();
test("Should add test to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this one is better",
    createdAt: 1000,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(1);
    done();
  });
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
