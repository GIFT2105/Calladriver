import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth,  GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB6F-eUAPfkC0YY5R4CtxWCXdxMvPJkT9c",
  authDomain: "drvapp-b290c.firebaseapp.com",
  projectId: "drvapp-b290c",
  storageBucket: "drvapp-b290c.appspot.com",
  messagingSenderId: "549913928934",
  appId: "1:549913928934:web:1a8588d86743b45852c727",
  measurementId: "G-04HHFQ083Y"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage()

export { storage };

export default db;
