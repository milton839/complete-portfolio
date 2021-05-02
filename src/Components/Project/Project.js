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
        description:"A full-stack service app where people can book their service and admin can add , delete their service",
        technology:"React js, Bootstrap, React Router, Node js, Mongodb, Firebase, Heroku,",
        github: "https://github.com/milton839/car-service-client",
        live: "https://car-service-839.web.app/",
    },
    {
        name: "FURNITURE SHOP",
        image: furnitureShop,
        description:"A full-stack E-Commerce shop where people can buy their product and admin can add and delete their product",
        technology:"React js, Bootstrap, React Router, Node js, Mongodb, Firebase, Heroku, Netlify",
        github: "https://github.com/milton839/furniture-shop-client",
        live: "https://relaxed-mclean-4b742d.netlify.app/",
    },
    {
        name: "ADVENTURE RIDERS",
        image: adventureRiders,
        description:"A single page vehicle application where people can book their vehicle and ride their choosing vehicle",
        technology:"React js, Bootstrap, React Router, Firebase, Netlify,",
        github: "https://github.com/milton839/Adventure-Riders",
        live: "https://confident-stonebraker-2d8463.netlify.app/",
    },
    {
        name: "EMA JOHN E_COMMERCE",
        image: emaJohn,
        description:"A full-stack E-Commerce shop where people can buy their product and admin can add and delete their product.",
        technology:"React js, React Router, Node js, Mongodb, Firebase, Heroku.",
        github: "https://github.com/milton839/ema-john-with-auth-client-database",
        live: "https://confident-haibt-a525e0.netlify.app/",
    },
    {
        name: "TAJAM WEBSITE",
        image: tajam,
        description:"A single page front-end website where people can see some service, team member and our best works.",
        technology:"HTML, CSS, Bootstrap, jQuery, javascript",
        github: "https://github.com/milton839/tajam",
        live: "https://milton839.github.io/tajam/",
    },
    {
        name: "PENGUIN FASHION",
        image: penguin,
        description:"A single page front-end e-commerce shop where people can see some winter products with some categories.",
        technology:"HTML, CSS, Bootstrap, jQuery, javascript",
        github: "https://github.com/milton839/assignment-02",
        live: "https://milton839.github.io/assignment-02/",
    },
]

const Project = () => {
    return (
        <div className="section pb-5">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <h2 className="text-center py-5 fw-bold fs-1">My Recent Project</h2>
                    {
                        allProject.map(project => <AllProject project = {project} key= {project.name}></AllProject>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;