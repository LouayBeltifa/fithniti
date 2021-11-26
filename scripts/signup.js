// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider, updateProfile    } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import {doc, setDoc, getFirestore  } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOswfUGaIJ99bDlZMZQnKTipwXAxG-Xug",
  authDomain: "fithniti-ea675.firebaseapp.com",
  databaseURL: "https://fithniti-ea675-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fithniti-ea675",
  storageBucket: "fithniti-ea675.appspot.com",
  messagingSenderId: "610227307219",
  appId: "1:610227307219:web:3e04f05a8fb247dede8a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleprovider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();
const db = getFirestore();



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      window.location = "./platforme.html"
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

document.getElementById("signupgooglebtn").addEventListener("click", (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleprovider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error : " + errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

});

document.getElementById("signupfacebookbtn").addEventListener("click", (e) => {
    e.preventDefault();

    signInWithPopup(auth, fbprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });


});