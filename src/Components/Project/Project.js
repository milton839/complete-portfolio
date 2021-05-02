import React from 'react';
import Header from '../Shared/Header/Header';
import carService from '../../images/project-01.png';
import furnitureShop from '../../images/project-02.png';
import adventureRiders from '../../images/project-03.png';
import emaJohn from '../../images/project-04.png';
import tajam from '../../images/project-05.png';
import penguin from '../../images/project-06.png';
import AllProject from '../AllProject/AllProject';

const allProject = [
    {
        name: "CAR SERVICE",
        image: carService,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "FURNITURE SHOP",
        image: furnitureShop,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "ADVENTURE RIDERS",
        image: adventureRiders,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "EMA JOHN E_COMMERCE",
        image: emaJohn,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "TAJAM WEBSITE",
        image: tajam,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "PENGUIN FASHION",
        image: penguin,
        description:"A full-stack service app using React, Node.js, Mongodb, Bootstrap, Firebase, Heroku",
        github: "https://githubhub.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
]

const Project = () => {
    return (
        <div className="section">
            <Header></Header>
            <div className="row container">
                <h2>My Recent Project</h2>
                {
                    allProject.map(project => <AllProject project = {project} key= {project.name}></AllProject>)
                }
            </div>
        </div>
    );
};

export default Project;