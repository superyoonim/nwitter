// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


  // export default firebase.initializeApp(firebaseConfig);

  // export const authService = firebase.auth();

// const app = initializeApp(firebaseConfig);
// export const authService = getAuth();

// initializeApp(firebaseConfig);

// export const auth = getAuth();

const firebaseApp = initializeApp(firebaseConfig);
// 버전 9부터 auth 는 요런식으로 가져와야 합니다.
export const authService = getAuth(firebaseApp);