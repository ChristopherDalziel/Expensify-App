import React from "react";

// Created a promise that resolves
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // You can only resolve once
    // resolve("This is my resolved data!");
    reject("Something went wrong!");
  }, 1500);
});

// Once promise is resolved print it to console, because of the timeout this will take 1.5 seconds
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(("Error:", error));
  });

const PromisesComponent = () => {
  return (
    <div>
      <h1>Promises</h1>
    </div>
  );
};

export default PromisesComponent;
