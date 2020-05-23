import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// FIREBASE CANNOT ACCEPT DATA AS AN ARRAY - It will not error, but the data will be a mess.

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Testing the firebase connection
const database = firebase.database();

// Exporting firebase for use within our application
export { firebase, database as default };

// EVENT HANDLERS/LISTENERS?

// Prints to console whenever something is deleted from our expenses db
// database.ref("expenses").on("child_removed", (snapshot) => {
//   // snapshot.key is returning the id
//   console.log(snapshot.key, snapshot.val());
// });

// Prints to console whenever something is updated within our expenses db
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Prints to console whenever something is added within our expenses db - this isn't just called for new data, it is also called for existing data
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// FETCHING

// once returns a promise
// database
//   // if we put a value within reference, such as "location", it will return only that information from the db instead of the root
//   .ref("location")
//   .once("value")
//   // our available data is known as a snapshot
//   .then((snapshot) => {
//     // snapshot.val returns our requested data, that in this situation is the root data of our DB
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// on takes a value, and a call back function, in our case this will be our take our snapshot value and return that by printing it to the screen, we don't use promises here because they only resolve or reject once. So we use the callback pattern here. This works as a subscription of sorts to our DB.
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   // If we cannot access the data
//   (error) => {
//     console.log("Error with data fetching", error);
//   }
// );

// // Example of canceling a subscription
// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// FETCHING - PRACTICE (Challenge)

// const onValueChange = database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// SET PART 1

// ref = references the location within the database, if we pass nothing in it will be set to the root location
// set = sets the value for that reference, you do not have to set an object to a reference
// database
//   .ref()
//   .set({
//     name: "Christopher Dalziel",
//     age: 25,
//     stressLevel: 10,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Laverton",
//       state: "VIC",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// REMOVAL

// Removing a line of data out of our object
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((error) => {
//     console.log("Data was not removed");
//   });

// Passing in null as the new value is an equivalent of using remove, however using remove is more explicit.
// database.ref("isSingle").set(null);

// UPDATE

// Using update allows us to update the values of many parts of our database, with one call instead many set calls
// Update only updates at the root level, if we go into nested objects it will update the entire location and we will lose the data
// database.ref().update({
//   job: "Manager",
//   // This is how we update a nested value without changing the root level, in this case the root level is location
//   "location/city": "Yarraville",
// });

// database.ref().update({
//   stressLevel: 0,
//   "job/company": "EB Games",
//   "location/city": "Eagle Farm",
// });

// SET PART 2

// if set is not an object
// database.ref().set("this is my data");

// this completely replaces the above object it does not update it
// database.ref().set({
//   age: 26,
// });

// this references the age within our existing data and updates to 27
// database.ref("age").set(25);
// // this references city within the location section of our database and updates it
// database.ref("location/city").set("Yarraville");

// database
//   .ref("attributes")
//   .set({
//     height: 181,
//     weight: 65,
//   })
//   .then(() => {
//     console.log("Attributes data was added to the database");
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// console.log("I made a request to change the data");

// ARRAYS IN FIREBASE (Adding) - You cannot use Arrays however:

// Pushing this way will give us a section within our DB called notes, and then a randomized ID within that ID the title and body will be stored
// database.ref("notes").push({
//   title: "Harry Potter",
//   body: "There is a lot of Harry Potter",
// });

// We can select an individual ID for removal like this
// database.ref("notes/-M7m7sflYc5y90bHGZy7").remove();

// ARRAY DATABASE CHALLENGE 1

// database.ref("expenses").push({
//   description: "Water Bill",
//   note: "",
//   amount: 500,
//   createdAt: 1000,
// });

// database.ref("expenses").push({
//   description: "Gas Bill",
//   note: "While room-mates are away",
//   amount: 10,
//   createdAt: 1000,
// });

// database.ref("expenses").push({
//   description: "Rego",
//   note: "Toyota 86",
//   amount: 800,
//   createdAt: 5000,
// });

// ARRAYS IN FIREBASE, FETCHING, MANIPULATING ETC

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     // This console.log returns the snapshot data, which returns a series of object like data, not useful to our application
//     // console.log(snapshot.val());

//     const expenses = [];

//     // Child snapshot is regarded as the data returned from the for each, we can call it whatever we like
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         // the id has been randomly setby firebase as a key
//         id: childSnapshot.key,
//         // Everything else that is within each childSnapshot
//         ...childSnapshot.val(),
//       });
//     });
//     // This console.log outputs a series of arrays with our data held within them now
//     console.log(expenses);
//   });

// ARRAY SUBSCRIPTION CHALLENGE 2 - Print any changes within our expenses DB change, print array to the screen
// const onValueChange = database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log("Error with data fetching", error);
//   }
// );
