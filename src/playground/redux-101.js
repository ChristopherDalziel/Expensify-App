// To be removed later - testing redux before implementing it in the full application

import React from "react";
import { createStore } from "redux";

// Dummy export so I can run redux
const Redux101 = () => {
  return (
    <div>
      <h1>redux test</h1>
    </div>
  );
};

// Setting the store/state to our default state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

console.log(store.getState());

store.dispatch({
  type: "INCREMENT",
});

console.log(store.getState());

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "INCREMENT",
});

console.log(store.getState());

store.dispatch({
  type: "RESET",
});

console.log(store.getState());

export default Redux101;
