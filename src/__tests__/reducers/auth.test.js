import authReducer from "../../reducers/auth";

test("Should setup default login", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("Should set uid for login", () => {
  const action = { type: "LOGIN", uid: 1 };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should set uid for logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer(
    { uid: "at this point something would be here" },
    action
  );
  expect(state).toEqual({});
});
