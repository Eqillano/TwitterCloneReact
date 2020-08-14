import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-CLQAKQsn2eZvTEmbXPPUy4GvrfdFT5E",
    authDomain: "twitter-co.firebaseapp.com",
    databaseURL: "https://twitter-co.firebaseio.com",
    projectId: "twitter-co",
    storageBucket: "twitter-co.appspot.com",
    messagingSenderId: "123857014965",
    appId: "1:123857014965:web:f4e8e04471b546e8d32efc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;