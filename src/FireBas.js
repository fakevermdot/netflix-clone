import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgnZzPFTxOLFJh6BedkA0iJ_--f3BFDO0",
    authDomain: "netflix-clone-e17f0.firebaseapp.com",
    projectId: "netflix-clone-e17f0",
    storageBucket: "netflix-clone-e17f0.appspot.com",
    messagingSenderId: "389732019366",
    appId: "1:389732019366:web:9574a07991bac2490fd867"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth };
  export default db;