import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

const provider = new firebase.auth.GoogleAuthProvider();
export const googlesignIn = () =>
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      const token = result.credential.accessToken;
      const user = result.user;
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });

// export default firebase;
// Initialize Firebase
