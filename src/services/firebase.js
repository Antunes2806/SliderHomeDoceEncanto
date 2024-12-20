import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCSW51M324N5kixrtA_gC2yKxdp71CkMPI",
  authDomain: "doce-encanto-a0196.firebaseapp.com",
  projectId: "doce-encanto-a0196",
  storageBucket: "doce-encanto-a0196.appspot.com",
  messagingSenderId: "469442439206",
  appId: "1:469442439206:web:d3ef7cced6526b61a15ee7",
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { firestore, auth, db };
