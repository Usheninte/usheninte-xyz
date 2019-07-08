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

  // Get values
  // Contact form text values
  let fullName = document.getElementById('fullName');
  let emailAddress = document.getElementById('emailAddress');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');
  let date = new Date();

  // Save message to firebase function

  db.collection("messages").add({
    fullName: fullName,
    emailAddress: emailAddress,
    subject: subject,
    message: message,
    date: date
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

}
