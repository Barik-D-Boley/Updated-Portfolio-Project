import React from "react";
import Projects from "../Data/projects.js";
import "../Images/Menu_Project.PNG";

function infoBox() {
    let stuff = [];
    for (let i = 0; i < Projects.length; i++) {
        const { ProjectName, GithubLink, DateCreated, LibraryUsed, WebsiteLink, Description, CoverImage } = Projects[i];

        stuff.push(  
            <div className="project-card" key={i}>
                <img src={CoverImage} alt={ProjectName} />
                <a href={WebsiteLink} target="_blank" rel="noreferrer" >{ProjectName}</a>
                <p>{DateCreated}</p>
                <a href={GithubLink}>See on Github</a>
                <p>Library Used: {LibraryUsed}</p>
                <p>{Description}</p>
            </div>
        )
    }
    return <div id="all-project-cards">{stuff}</div>;
}

export default infoBox;
