import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "ThisIsMyTestUID";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => {
      done();
    });
});

test("Should set up remove expense action object", () => {
  const action = removeExpense({ id: "Test-ID" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "Test-ID",
  });
});

test("should remove expense from firebase", (done) => {
  // When start remove expense runs it needs auth
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.ref(`user/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("Should edit expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 21045 };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test("Should set up add expense action object with provided values", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

// This is an async test, when we are creating an async test we need to let our test suite know, otherwise it will just pass or fail without waiting for the asynchronous calls, to do this we pass in done, our test is not complete until we call done();
test("Should add test to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this one is better",
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // Pass all actions to our mockStore, this returns an array of all of the actions held within the store
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          // Expect any string
          id: expect.any(String),
          ...expenseData,
        },
      });

      // Check if the data was saved to the database
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    // Chain promise
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("Should add expense with defaults to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      // Pass all actions to our mockStore, this returns an array of all of the actions held within the store
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          // Expect any string
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      // Check if the data was saved to the database
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    // Chain promise
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test("Should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({ type: "SET_EXPENSES", expenses });
});

test("Should fetch the expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
