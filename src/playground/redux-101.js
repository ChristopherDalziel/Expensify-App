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
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

export default Redux101;
