const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = require('./firebaseConfig');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = firebase.firestore();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  db.collection("messages").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  // Get values
  // Contact form text values
  let fullName = document.getElementById('fullName');
  let emailAddress = document.getElementById('emailAddress');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');

  // Save message to firebase function

  db.collection("messages").add({
    fullName: fullName,
    emailAddress: emailAddress,
    subject: subject,
    message: message
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
