import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCgvd2xbO70X8IOgrmDGXHSzKuQKfRjG-A",
  authDomain: "crown-db-adbae.firebaseapp.com",
  databaseURL: "https://crown-db-adbae.firebaseio.com",
  projectId: "crown-db-adbae",
  storageBucket: "crown-db-adbae.appspot.com",
  messagingSenderId: "208263302689",
  appId: "1:208263302689:web:c763c59585f56132639d60",
  measurementId: "G-EC3S0W9HT0",
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
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user:", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
