import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXFmcBCCaGjWvt95_z500RhYd8POBPMGU",
  authDomain: "bengpt-72a85.firebaseapp.com",
  projectId: "bengpt-72a85",
  storageBucket: "bengpt-72a85.firebasestorage.app",
  messagingSenderId: "575502208336",
  appId: "1:575502208336:web:25dbadb4ab668ed0263055",
  measurementId: "G-H3LEY936ML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);