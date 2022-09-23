import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBnrTtiWxzCsIjW17QssDx1NoxgwpCSe60",
    authDomain: "crown-clothing-2b3f3.firebaseapp.com",
    projectId: "crown-clothing-2b3f3",
    storageBucket: "crown-clothing-2b3f3.appspot.com",
    messagingSenderId: "599740104979",
    appId: "1:599740104979:web:cfe65c046be97e53681ae6",
    measurementId: "G-PYFR1VT01B"
  };

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase