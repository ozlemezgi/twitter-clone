import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1KjdmHVDX-lUNQp2sZZ8hXOmenUnRCYQ",
    authDomain: "twitter-clone-61918.firebaseapp.com",
    projectId: "twitter-clone-61918",
    storageBucket: "twitter-clone-61918.appspot.com",
    messagingSenderId: "851236769009",
    appId: "1:851236769009:web:fbd362da08bb248ae6ad50",
    measurementId: "G-RK94XLJPGJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;

