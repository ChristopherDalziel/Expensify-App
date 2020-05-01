import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should generate set text filter with text value", () => {
  const testString = "Test String";
  const action = setTextFilter(testString);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: testString,
  });
});

test("Should generate set text filter with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Test Filter",
    text: "",
  });
});

test("Should generate sort by date filter action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
});

test("Should generate sort by amount filter action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
