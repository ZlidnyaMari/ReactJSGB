import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqookPo4Bb9hr_50IdLL7cdeL07RML5-U",
  authDomain: "superapp-ef1d7.firebaseapp.com",
  databaseURL: "https://superapp-ef1d7-default-rtdb.firebaseio.com",
  projectId: "superapp-ef1d7",
  storageBucket: "superapp-ef1d7.appspot.com",
  messagingSenderId: "926521139231",
  appId: "1:926521139231:web:234fd1b99cc436cabe752a"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;