import React from 'react';

const AllProject = ({project}) => {
    const {name, image, description, github, live} = project;
    return (
        <div className="col-lg-4">
            <div class="card" style={{width: '22rem'}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default AllProject;