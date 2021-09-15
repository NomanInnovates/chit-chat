import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3mkN-9VjR8KTCUTmQt0-kfJ_46ficlzQ",
    authDomain: "chat-app-0125.firebaseapp.com",
    projectId: "chat-app-0125",
    storageBucket: "chat-app-0125.appspot.com",
    messagingSenderId: "217305138617",
    appId: "1:217305138617:web:91af9fd19fea12bd496268"
  };
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
