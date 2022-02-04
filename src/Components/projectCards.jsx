import React from "react";
import Projects from "../Data/projects.js";
import { BiLinkExternal } from "react-icons/bi";

function infoBox() {
    let stuff = [];
    for (let i = 0; i < Projects.length; i++) {
        const { ProjectName, GithubLink, DateCreated, LibraryUsed, WebsiteLink, Description, CoverImage } = Projects[i];

        stuff.push(  
            <div className="project-card" key={i}>
                <img src={CoverImage} alt={ProjectName} className="project-image" />
                <div className="project-card-info">
                    <h2 className="project-title">{ProjectName}</h2><a href={WebsiteLink} target="_blank" rel="noreferrer" className="website-link" ><BiLinkExternal /></a>
                    <p>Created on {DateCreated}</p>
                    <p>Library Used: {LibraryUsed}</p>
                    <div className="github-link" style={{marginBottom: ".7rem"}}><a href={GithubLink} target="_blank" rel="noreferrer">View on Github</a></div>
                    {/* <hr />
                    <p className="description">{Description}</p> */}
                </div>
            </div>
        )
    }
    return <div id="all-project-cards">{stuff}</div>;
}

export default infoBox;
