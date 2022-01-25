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
import AboutMe from "./Pages/AboutMe";
import Gallery from "./Pages/ProjectGallery";
import Contact from "./Pages/ContactMe";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);