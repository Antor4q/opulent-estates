// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhdZe9SrudRBi4fhO0_DgEYCXJlNHitkU",
  authDomain: "opulent-estates-1b663.firebaseapp.com",
  projectId: "opulent-estates-1b663",
  storageBucket: "opulent-estates-1b663.appspot.com",
  messagingSenderId: "170392642528",
  appId: "1:170392642528:web:4548aedf9d1d9366800185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth