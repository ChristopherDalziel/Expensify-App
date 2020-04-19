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
      // incrementBy allows us to dynamically pass information when/if the action is called.
      // If incrementBy is not a number, we default the value to 1
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        // If decrementBy is not a number, we default the value to 1
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    // Allows us the set our own count
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});

// When you usub from the subscribe we stop following any new dispatches.
// unsubscribe();

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "SET",
  count: 101,
});

export default Redux101;
