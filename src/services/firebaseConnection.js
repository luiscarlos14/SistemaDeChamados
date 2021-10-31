import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
  apiKey: "AIzaSyDOmcUmEiu9GrHuRWe3VMuNIzfO_SRo5Gk",
  authDomain: "appchamados-2bc30.firebaseapp.com",
  projectId: "appchamados-2bc30",
  storageBucket: "appchamados-2bc30.appspot.com",
  messagingSenderId: "382532755216",
  appId: "1:382532755216:web:394156efe53cc0db558f95",
  measurementId: "G-Q3G4SMZC2E"
};

// Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
