import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrS9EnWLoi6DbJjTEuUqyYblWBl4KGsvw",
  authDomain: "comicardos-ecommerce.firebaseapp.com",
  projectId: "comicardos-ecommerce",
  storageBucket: "comicardos-ecommerce.appspot.com",
  messagingSenderId: "27915597930",
  appId: "1:27915597930:web:f65fb2e7653a88bf507213",
};
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
