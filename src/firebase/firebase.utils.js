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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); 

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error while creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;