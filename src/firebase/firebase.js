import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYxDLK7yitsuxZ2-USQPnxQY0mjz1DfIE",
  authDomain: "expensify-d324e.firebaseapp.com",
  databaseURL: "https://expensify-d324e.firebaseio.com",
  projectId: "expensify-d324e",
  storageBucket: "expensify-d324e.appspot.com",
  messagingSenderId: "566560984992",
  appId: "1:566560984992:web:db4a945364eb398951dec5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: "Chris",
});
