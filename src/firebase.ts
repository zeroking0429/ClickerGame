import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgXqUFscqNSCi-0l-nazRSFapaOQs9LFE",
  authDomain: "clickergame-41421.firebaseapp.com",
  projectId: "clickergame-41421",
  storageBucket: "clickergame-41421.appspot.com",
  messagingSenderId: "448536536895",
  appId: "1:448536536895:web:3b944db2066ce6e060558a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
