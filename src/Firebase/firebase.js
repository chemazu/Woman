import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-bmzILgWSyL_t3_nQam0fIqh1uXC9J0U",
  authDomain: "quay-5f338.firebaseapp.com",
  databaseURL: "https://quay-5f338.firebaseio.com",
  projectId: "quay-5f338",
  storageBucket: "quay-5f338.appspot.com",
  messagingSenderId: "372152546947",
  appId: "1:372152546947:web:aa8e119c4224b2ddd38db6",
  measurementId: "G-C8KLE035XG",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//SAVING USER DATA
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); //this creates a firebase doc that can be searched
  const snapShot = await userRef.get(); //.get() checks for userRef will await waits
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};
// export default firebase;
// Initialize Firebase
