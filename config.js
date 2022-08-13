import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig={
    apiKey: "AIzaSyDyra79sY33v72Wuw6JE9DqAdTiYVWXxgw",
    authDomain: "e-ride-32e2b.firebaseapp.com",
    projectId: "e-ride-32e2b",
    storageBucket: "e-ride-32e2b.appspot.com",
    messagingSenderId: "195236534327",
    appId: "1:195236534327:web:bef04a902d05c16350c7b2"
}
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
