
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSMwjlyPHuHyZ3QDpa9ag3CCJyR1u_oGA",
  authDomain: "reactlinks-c91e3.firebaseapp.com",
  projectId: "reactlinks-c91e3",
  storageBucket: "reactlinks-c91e3.firebasestorage.app",
  messagingSenderId: "925861190601",
  appId: "1:925861190601:web:56b591fa94ede89defe618"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};