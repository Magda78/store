import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA8EIAW68T8VTFxrLDAX5V_bmUdQrWzSd4",
  authDomain: "store-db-32188.firebaseapp.com",
  databaseURL: "https://store-db-32188.firebaseio.com",
  projectId: "store-db-32188",
  storageBucket: "store-db-32188.appspot.com",
  messagingSenderId: "97583958392",
  appId: "1:97583958392:web:97d55c4f460d873748a08d",
  measurementId: "G-WVBMM88GL1"
};

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;