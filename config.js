import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDtdYDpn7yzrjEpkXLAc7xhvGz-SWq4fZs",
    authDomain: "barter-system-57a08.firebaseapp.com",
    projectId: "barter-system-57a08",
    storageBucket: "barter-system-57a08.appspot.com",
    messagingSenderId: "538064321257",
    appId: "1:538064321257:web:0577832359044be6a2ce78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();