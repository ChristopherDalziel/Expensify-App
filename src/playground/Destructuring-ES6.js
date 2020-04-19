import React from "react";

const Destructuring = () => {
  return (
    <div>
      <h1>Destructuring in ES6</h1>
    </div>
  );
};

const person = {
  // name: "Chris",
  age: 25,
  location: {
    city: "Melbourne",
    temperature: 27,
  },
};

// Can use object destructuring in one line like this instead of the dual lines below
// Syntax like name = "Anon" allows us to set a default, if there is no name provided in person, instead of returning undefined, return our new default of "Anon". (The default is only used if there is no default on the variable.)
const { name = "Anon", age } = person;

// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

// Syntax like temperature: temp allows us to rename rename our variable on the fly
const { temperature: temp, city } = person.location;

// If city and temperature exist return the following statement
if (city && temp) {
  console.log(`It's ${temp} in ${city}`);
}

export default Destructuring;
