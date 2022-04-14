import React from "react";
import bcrypt from "bcryptjs";

function loginForm() {
    /* Firebase Stuff */
    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries

    // // Your web app's Firebase configuration
    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyCzekNpma1KoMwSY7g0PSAVdrvXfKjYj2I",
    //     authDomain: "portfolio-project-boley.firebaseapp.com",
    //     projectId: "portfolio-project-boley",
    //     storageBucket: "portfolio-project-boley.appspot.com",
    //     messagingSenderId: "960012129041",
    //     appId: "1:960012129041:web:35142e4acdfcf14c98f2b0",
    //     measurementId: "G-S4GTXN2X9N"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    
    return (
        <form action="">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
            <input type="submit" />
        </form>
    )
}

export default loginForm
