import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqQ1MTUjYCPF-ObpykYDHIm_9tIoT9g7E',
  authDomain: 'shikimory-92474.firebaseapp.com',
  projectId: 'shikimory-92474',
  storageBucket: 'shikimory-92474.firebasestorage.app',
  messagingSenderId: '576157575250',
  appId: '1:576157575250:web:7d4c54103b0f4f6c2f578b',
  measurementId: 'G-QJZ71PF3V9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
