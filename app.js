const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = require('./firebaseConfig');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = firebase.firestore();
let messagesRef = db.collection('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  // Application form text values
  let fullName = getInputVal('fullName');
  let emailAddress = getInputVal('emailAddress');
  let subject = getInputVal('subject');
  let message = getInputVal('message');

  // Save application to firebase function
  messagesRef.add({
    fullName: fullName,
    emailAddress: emailAddress,
    subject: subject,
    message: message
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", messagesRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

  
  // .doc(emailAddress).set({
  //   fullName: fullName,
  //   emailAddress: emailAddress,
  //   subject: subject,
  //   message: message
  // })

}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
