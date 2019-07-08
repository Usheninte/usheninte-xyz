const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTO_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.MSG_SEND_ID,
  appId: process.env.APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore
const db = firebase.firestore();

// Targeting form elements
let fullName = document.querySelector('#fullName');
let emailAddress = document.querySelector('#emailAddress');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');

