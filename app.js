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
let messagesRef = db.collection("messages");

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
  messagesRef.doc(emailAddress).set({
    fullName: fullName,
    emailAddress: emailAddress,
    subject: subject,
    message: message
  })

}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
