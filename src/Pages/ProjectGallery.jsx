import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Carousel from "../Components/carousel";

function ProjectGallery() {
    return (
        <div>
            <Navbar active={"projectGallery"} />
            <Carousel />
            <Footer />
        </div>
    )
}

export default ProjectGallery
