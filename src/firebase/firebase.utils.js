import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA6ULFwJmQ-81USF6V3x-r2G30onAl4eBU",
  authDomain: "ecommerce-platform-d559c.firebaseapp.com",
  projectId: "ecommerce-platform-d559c",
  storageBucket: "ecommerce-platform-d559c.appspot.com",
  messagingSenderId: "743038379120",
  appId: "1:743038379120:web:4ff82e220499b8e9f380b5",
  measurementId: "G-29D2WSSKFJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;