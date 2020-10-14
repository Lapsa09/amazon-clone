import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAJzqYrQS2vDsKkk1Tz892bg1_f6F8koSs",
  authDomain: "clone-5a43c.firebaseapp.com",
  databaseURL: "https://clone-5a43c.firebaseio.com",
  projectId: "clone-5a43c",
  storageBucket: "clone-5a43c.appspot.com",
  messagingSenderId: "176670105803",
  appId: "1:176670105803:web:af5a49e99f7a83b2ec7b4e",
  measurementId: "G-8VNM0JLVF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
