import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChWB7WeZ84Sn7Y1_VGBhB2o3h4uSWurJc",
  authDomain: "coderhouse-reactcourse.firebaseapp.com",
  projectId: "coderhouse-reactcourse",
  storageBucket: "coderhouse-reactcourse.appspot.com",
  messagingSenderId: "645699445184",
  appId: "1:645699445184:web:356e2eaa20c2611a2da825",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
