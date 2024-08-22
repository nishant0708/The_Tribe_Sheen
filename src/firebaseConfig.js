import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  // your config
  apiKey: 'AIzaSyBaZV-1N99JmM71XEwCAwFq4gxz1KNQTKY',
  authDomain: 'tribe-sheen.firebaseapp.com',
  projectId: 'tribe-sheen',
  storageBucket: 'tribe-sheen.appspot.com',
  messagingSenderId: '440631172383',
  appId: '1:440631172383:web:c86fa386220d76bd37a42a',
  measurementId: 'G-GRERM7NN5B',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)
const auth = getAuth(app) // Initialize Firebase Auth

export { database, storage, auth, GoogleAuthProvider }
