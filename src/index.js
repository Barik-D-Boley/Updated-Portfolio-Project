/* Base */
import React from "react";
import "./Styling/main.css";

/* Routing */
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

/* Pages */
import Home from "./Pages/Homepage";
import Resume from "./Pages/Resume";
import Gallery from "./Pages/ProjectGallery";
import Contact from "./Pages/ContactMe";
import Login from "./Pages/Login";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

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