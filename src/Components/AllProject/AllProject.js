import React from 'react';
import './AllProject.css';
import { FaGithub } from 'react-icons/fa';

const AllProject = ({project}) => {
    const {name, image, description, technology, github, live} = project;
    return (
        <div className="col-md-4 col-12">
            <div class="card mt-3 mb-5" >
                <img class="card-img-top" src={image} alt="" />
                <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <h6>Technology: {technology}</h6>
                </div>
                <div class="card-body  d-flex justify-content-center ">
                <a href={github} target="blank">
                    <button type="button" class="btn btn-outline-primary">
                    <FaGithub />
                    <span></span> GitHub
                    </button>
                </a>
                <a href={live} target="blank">
                    <button type="button" class="btn btn-outline-warning">
                    Live Project
                    </button>
                </a>
                </div>
            </div>
        </div>
    );
};

export default AllProject;