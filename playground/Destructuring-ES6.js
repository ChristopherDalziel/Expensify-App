import React from "react";

const Destructuring = () => {
  return (
    <div>
      <h1>Destructuring in ES6</h1>
    </div>
  );
};

// Array Destructuring:

const address = ["15 Smith St", "Melbourne", "VIC", "3000"];

// Inside our const we are going to add an ordered list of variable names to match up with our above array
// The state = "QLD" syntax allows us to set a default within our array if there is no item in the third position within our array, it will create one called state and set the default to "QLD".
const [, the_city, state = "QLD", postcode] = address;

// console.log(`You're in in ${the_city} ${state}`);

const item = ["Coffee (HOT)", "$2.00", "$3.50", "$4.00"];

const [drinkName, , mediumPrice] = item;

// console.log(`A medium ${drinkName} costs ${mediumPrice}`);

// Object Destructuring:

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

// console.log(`${name} is ${age}.`);

// Syntax like temperature: temp allows us to rename rename our variable on the fly
const { temperature: temp, city } = person.location;

// If city and temperature exist return the following statement
if (city && temp) {
  // console.log(`It's ${temp} in ${city}`);
}

const book = {
  title: "Harry Potter",
  author: "Jk Rowling",
  publisher: {
    name: "Bloomsberry",
  },
};

// Change the variable name and setting a default if there is no name
const { name: publisherName = "Self-published" } = book.publisher;

// console.log(publisherName);

export default Destructuring;
