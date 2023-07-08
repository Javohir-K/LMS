import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhtS9yHvb-7w16vjB7bW0yoVm9NeHOfD4",
  authDomain: "lms-edec.firebaseapp.com",
  projectId: "lms-edec",
  storageBucket: "lms-edec.appspot.com",
  messagingSenderId: "65831391459",
  appId: "1:65831391459:web:1fd23ed5f8572b1c9cf5d6",
  measurementId: "G-PM70XYBL2B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
