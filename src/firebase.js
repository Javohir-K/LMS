import firebase from "firebase";

const firebaseConfig = {
  //Here is your firebase api keys
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
