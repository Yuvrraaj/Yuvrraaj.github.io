import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./env";

// Firebase web config is safe to ship to the client (it identifies the project,
// it does not authorize access). Access is governed by Firestore Security Rules.
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
