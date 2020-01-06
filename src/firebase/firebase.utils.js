import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgANL8uoy8JowG0XPGUl9E-hycGiDjeB8",
    authDomain: "crwn-db-6b89f.firebaseapp.com",
    databaseURL: "https://crwn-db-6b89f.firebaseio.com",
    projectId: "crwn-db-6b89f",
    storageBucket: "crwn-db-6b89f.appspot.com",
    messagingSenderId: "692908726427",
    appId: "1:692908726427:web:03f213df8d10ca2a830e3e",
    measurementId: "G-2ERT1SV899"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

