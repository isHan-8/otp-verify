import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA8jfW-O9slG-IE7NxetQTLMhQZ5kYrgLI",
    authDomain: "react-otp-work-739ea.firebaseapp.com",
    projectId: "react-otp-work-739ea",
    storageBucket: "react-otp-work-739ea.appspot.com",
    messagingSenderId: "412423293838",
    appId: "1:412423293838:web:a87172b57436cb657e32df",
    measurementId: "G-1GXBXS8EXP"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;