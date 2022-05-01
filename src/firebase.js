import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-RsEqwsG55MNnFDHef2yfuaeDJNCBfHc",
  authDomain: "disney-plus-clone-68f1d.firebaseapp.com",
  projectId: "disney-plus-clone-68f1d",
  storageBucket: "disney-plus-clone-68f1d.appspot.com",
  messagingSenderId: "776872612145",
  appId: "1:776872612145:web:7812570554cf144a0be010",
  measurementId: "G-CNF4SJ29B0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
