import firebase from 'firebase'
import 'firebase/firestore'
import FirebaseConfig from './FirebaseConfig'
const firebaseApp = firebase.initializeApp(FirebaseConfig)
export default firebaseApp.firestore()