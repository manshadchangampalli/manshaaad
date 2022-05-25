import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAoJM0_3ea0pyXSgUJ0L-DIfrV_6CsA2m8",
    authDomain: "manshadportfolio.firebaseapp.com",
    projectId: "manshadportfolio",
    storageBucket: "manshadportfolio.appspot.com",
    messagingSenderId: "510560721798",
    appId: "1:510560721798:web:8f12c84613af30b7576a07",
    measurementId: "G-6MBEL75R3R"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;