import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCR5MEdQdNl8JzCZCx1nRCd4_EPYA5Zgeo",
  authDomain: "linkedin-clone-aef04.firebaseapp.com",
  projectId: "linkedin-clone-aef04",
  storageBucket: "linkedin-clone-aef04.appspot.com",
  messagingSenderId: "659334001845",
  appId: "1:659334001845:web:069c7c94d56910d4c7bafc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };