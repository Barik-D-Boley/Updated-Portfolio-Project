import React from "react";
import Projects from "../Data/projects.js";
import { BiLinkExternal } from "react-icons/bi";

// Images
import "../Images/Calculator.PNG";
import "../Images/Dogs.PNG";
import "../Images/Doors.PNG";
import "../Images/Fruit_Store.PNG";
import "../Images/Gamecube_Website.PNG";
import "../Images/Group_Car_Website.PNG";
import "../Images/HTML_Quiz.PNG";
import "../Images/Jenkins_V2.PNG";
import "../Images/Loading_and_Error.PNG";
import "../Images/Menu_Project.PNG";
import "../Images/Multi_API_React_App.PNG";
import "../Images/Picture_Grid.PNG";
import "../Images/Picture_Grid_Mobile.PNG";
import "../Images/Pizza_Form.PNG";
import "../Images/PokeDex.PNG";
import "../Images/Portfolio_Project.PNG";
import "../Images/React_Components.PNG";
import "../Images/React_Reviews.PNG";
import "../Images/Recipe_Article.PNG";
import "../Images/Store_API.PNG";
import "../Images/Summer_Event.PNG";
import "../Images/Task_Tracker.PNG";
import "../Images/Tours_Assignment.PNG";
import "../Images/World_Wide_Weather.PNG";

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
                    <div className="github-link"><a href={GithubLink} target="_blank" rel="noreferrer">View on Github</a></div><hr />
                    <p className="description">{Description}</p>
                </div>
            </div>
        )
    }
    return <div id="all-project-cards">{stuff}</div>;
}

export default infoBox;
