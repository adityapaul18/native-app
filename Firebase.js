import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZeFmeGW7NmtCRSSgarI-bISmu3s_Liik",
  authDomain: "signal-4ae86.firebaseapp.com",
  projectId: "signal-4ae86",
  storageBucket: "signal-4ae86.appspot.com",
  messagingSenderId: "501505903992",
  appId: "1:501505903992:web:16ef32deaa5e0a86fe4c8d",
  measurementId: "G-8WE19SMRC8"
};
let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };