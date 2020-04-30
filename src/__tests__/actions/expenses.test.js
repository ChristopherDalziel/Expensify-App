import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "Test",
    note: "A test note",
    amount: 109500,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should set up add expense action object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
