
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBvjVEjyPTG7evBoQGSNm2mGyp4gOf0CiE",
    authDomain: "project-t-6f743.firebaseapp.com",
    databaseURL: "https://project-t-6f743-default-rtdb.firebaseio.com",
    projectId: "project-t-6f743",
    storageBucket: "project-t-6f743.appspot.com",
    messagingSenderId: "909478904512",
    appId: "1:909478904512:web:4271f7fc01afb68c312325",
    measurementId: "G-V0WK3F2ZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;