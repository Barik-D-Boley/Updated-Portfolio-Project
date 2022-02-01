// Updated Portfolio Project Image
// Creting an API link and Image
// 

let Projects = [
    {
        "ProjectName": "Multi API React App",
        "GithubLink": "https://github.com/xBarikadex/Multi-API-React-App",
        "DateCreated": "August 26, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://multi-api-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Multi_API_React_App.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Updated Portfolio Project",
        "GithubLink": "https://github.com/xBarikadex/Updated-Portfolio-Project",
        "DateCreated": "November 14, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://updated-portfolio-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        // "CoverImage": require("../Images/.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Store API",
        "GithubLink": "https://github.com/xBarikadex/Store-API",
        "DateCreated": "December 12, 2021",
        "LibraryUsed": "NodeJS",
        "WebsiteLink": "https://store-api-boley.herokuapp.com/index.html",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Store_API.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Creating an API",
        "GithubLink": "https://github.com/xBarikadex/Creating-an-API",
        "DateCreated": "November 7, 2021",
        "LibraryUsed": "NodeJS",
        "WebsiteLink": "",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        // "CoverImage": require("../Images/.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Tours Assignment",
        "GithubLink": "https://github.com/xBarikadex/Tours-Assignment",
        "DateCreated": "October 3, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://tours-assignment-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Tours_Assignment.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "React Component Practice",
        "GithubLink": "https://github.com/xBarikadex/React-Component-Practice",
        "DateCreated": "September 12, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://react-component-practice-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/React_Components.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Loading and Error Page",
        "GithubLink": "https://github.com/xBarikadex/Loading-and-Error-Page",
        "DateCreated": "September 5, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://loading-and-error-page-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Loading_and_Error.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Menu Project",
        "GithubLink": "https://github.com/xBarikadex/Menu-Project",
        "DateCreated": "October 3, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://menu-project-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Menu_Project.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Reviews React",
        "GithubLink": "https://github.com/xBarikadex/Reviews-React",
        "DateCreated": "September 19, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://reviews-react-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/React_Reviews.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Task Manager",
        "GithubLink": "https://github.com/xBarikadex/Task-Manager",
        "DateCreated": "December 12, 2021",
        "LibraryUsed": "NodeJS",
        "WebsiteLink": "https://task-manager-boley.herokuapp.com/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Task_Manager.PNG").default,
        "Notable": false
    },
/*     {
        "ProjectName": "Vet Project",
        "GithubLink": "https://github.com/TheCapn-MEC/vetProject",
        "DateCreated": "January 16, 2022",
        "LibraryUsed": "NodeJS",
        "WebsiteLink": "",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        // "CoverImage": require("../Images/Vet_Project.PNG").default,
        "Notable": true
    }, */
    {
        "ProjectName": "Portfolio Project",
        "GithubLink": "https://github.com/xBarikadex/Portfolio-Project",
        "DateCreated": "January 31, 2021",
        "LibraryUsed": "Bootstrap",
        "WebsiteLink": "https://xbarikadex.github.io/Portfolio-Project/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Portfolio_Project.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Group Car Website",
        "GithubLink": "https://github.com/Eves259/Group-Car-Website",
        "DateCreated": "January 24, 2021",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://eves259.github.io/Group-Car-Website/gallery.html",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Group_Car_Website.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Doors",
        "GithubLink": "https://github.com/xBarikadex/Doors",
        "DateCreated": "November 1, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Doors/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Doors.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Summer Event",
        "GithubLink": "https://github.com/xBarikadex/Summer-Event",
        "DateCreated": "August 1, 2021",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Summer-Event/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Summer_Event.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "World Wide Weather",
        "GithubLink": "https://github.com/lgrave264/Capstone",
        "DateCreated": "May 9, 2021",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://lgrave264.github.io/Capstone/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/World_Wide_Weather.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Task Tracker",
        "GithubLink": "https://github.com/xBarikadex/React-Project",
        "DateCreated": "May 2, 2021",
        "LibraryUsed": "React",
        "WebsiteLink": "https://task-tracker-boley.netlify.app/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Task_Tracker.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "PokeDex",
        "GithubLink": "https://github.com/xBarikadex/PokeDex",
        "DateCreated": "April 25, 2021",
        "LibraryUsed": "Bootstrap",
        "WebsiteLink": "https://xbarikadex.github.io/PokeDex/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/PokeDex.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Gamecube Website",
        "GithubLink": "https://github.com/SchoolPotato/BootStrapGroupWebsite",
        "DateCreated": "April 14, 2021",
        "LibraryUsed": "Bootstrap",
        "WebsiteLink": "https://schoolpotato.github.io/BootStrapGroupWebsite/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Gamecube_Website.PNG").default,
        "Notable": true
    },
    {
        "ProjectName": "Calculator",
        "GithubLink": "https://github.com/xBarikadex/Calculator",
        "DateCreated": "January 31, 2021",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Calculator/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Calculator.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Fruit Store",
        "GithubLink": "https://github.com/xBarikadex/Fruit-Store",
        "DateCreated": "January 3, 2021",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Fruit-Store/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Fruit_Store.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Dogs",
        "GithubLink": "https://github.com/xBarikadex/Dogs",
        "DateCreated": "November 1, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Dogs/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Dogs.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Picture Grid",
        "GithubLink": "https://github.com/xBarikadex/Picture-Grid-Project",
        "DateCreated": "October 25, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Picture-Grid-Project/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Picture_Grid.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "HTML Quiz",
        "GithubLink": "https://github.com/xBarikadex/HTML-Quiz",
        "DateCreated": "October 11, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/HTML-Quiz/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/HTML_Quiz.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Pizza Form",
        "GithubLink": "https://github.com/xBarikadex/Pizza-Form-Project",
        "DateCreated": "October 4, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Pizza-Form-Project/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Pizza_Form.PNG").default,
        "Notable": false
    },
    {
        "ProjectName": "Recipe Article",
        "GithubLink": "https://github.com/xBarikadex/Boley-Recipe",
        "DateCreated": "October 4, 2020",
        "LibraryUsed": "Vanilla",
        "WebsiteLink": "https://xbarikadex.github.io/Boley-Recipe/",
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aliquid at molestias dolorum provident repudiandae. Aliquid delectus consequuntur fugiat, quos maxime illo sit. Amet repellat incidunt perspiciatis quaerat id!",
        "CoverImage": require("../Images/Recipe_Article.PNG").default,
        "Notable": false
    }
].sort((a, b) => new Date(a.DateCreated) - new Date(b.DateCreated)).reverse();
export default Projects;