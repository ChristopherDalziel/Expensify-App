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

// Action generator - functions that return action objects

// Destructing incrementBy so it can be called without calling the payload, when we set the default to 1 it allows us to make our return much cleaner. If incrementBy is not called return an empty object and set it to 1 is basically what this syntax is implying.
const incrementCount = ({ incrementBy = 1 } = {}) => {
  // Returns the new action object
  return {
    type: "INCREMENT",
    // If incrementBy is not a number, set the default increment to 1`
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

// There is no need for a default value, because we've required it for the set action
const setCount = ({ count }) => {
  return {
    type: "SET",
    count,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

// Setting the store/state to our default state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
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

store.dispatch(incrementCount({ incrementBy: 5 }));

// When you usub from the subscribe we stop following any new dispatches.
// unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

export default Redux101;
