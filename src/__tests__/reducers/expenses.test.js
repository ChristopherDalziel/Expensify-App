import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  // Test removes nothing hence, it will not change so we can just return the array as is
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: 4,
    description: "test",
    note: "",
    amount: 5,
    createdAt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  // Returned array has everything in the imported array + our new one
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description: "updated test description",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe("updated test description");
});

test("Should not edit an expense if id is not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      description: "updated test description",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(state[1].description);
});

test("Should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[0]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});
