import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { useState } from "react";

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

const LoginForm = () => {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const database = getDatabase(app);

    // Initialize user input states
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [usernameInput, setUsername] = useState('');

    // event handler for user sign up
    const registerUser = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
        .then(userCredential => {
            // Signed up 
            const user = userCredential.user;
            console.log(userCredential);
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });

        setEmail('');
        setPassword('');
        setUsername('');
    }

    return (
        <>
            <div className="container my-5">
            <h1>Sign Up</h1>
            <div className="col-lg-8 px-0">
                <form id="MainForm" onSubmit={registerUser}>
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" placeholder="name@mail.com" 
                    onChange={event => setEmail(event.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" 
                    onChange={event => setPassword(event.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="Username" 
                    onChange={event => setUsername(event.target.value)}/>
                    <label htmlFor="floatingInput">User Name</label>
                    <button type="submit" className="btn btn-primary" style={{"float": "right", "marginTop": "12px"}}>Create New User</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default LoginForm;