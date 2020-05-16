import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expensesTotal";

test("Should return 0 if no expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("Should correct add up a single expense", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("Should correctly add up multiple expenses", () => {});
