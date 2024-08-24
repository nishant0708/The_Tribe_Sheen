import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  // your config
  apiKey: 'AIzaSyBEBhBv7AcPhmWS1JwfXijBEarDjsz16xM',
  authDomain: 'lupo-7ba5f.firebaseapp.com',
  databaseURL: 'https://lupo-7ba5f-default-rtdb.firebaseio.com',
  projectId: 'lupo-7ba5f',
  storageBucket: 'lupo-7ba5f.appspot.com',
  messagingSenderId: '418172032930',
  appId: '1:418172032930:web:b28842c67139e5c0e6c4fb',
  measurementId: 'G-1NVNFSWR1M',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)
const auth = getAuth(app) // Initialize Firebase Auth

export { database, storage, auth, GoogleAuthProvider }
