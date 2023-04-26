// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBhjeXSLL_cB7x8O0FlQZ9gfrl73QfPGU",
  authDomain: "netflix-clone2-bd4e8.firebaseapp.com",
  projectId: "netflix-clone2-bd4e8",
  storageBucket: "netflix-clone2-bd4e8.appspot.com",
  messagingSenderId: "257746401590",
  appId: "1:257746401590:web:0118739b6cf34411f2db97"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }