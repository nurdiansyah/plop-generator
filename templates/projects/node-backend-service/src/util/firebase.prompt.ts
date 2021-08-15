import firebase from 'firebase-admin'

export const firebaseApp = firebase.initializeApp({
  credential: firebase.credential.applicationDefault(),
})

export default firebaseApp
