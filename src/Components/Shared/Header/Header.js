import React from 'react';
import './Header.css';
import { FaArrowDown } from 'react-icons/fa';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-5 py-4">
            <div class="container-fluid">
                    <a class="navbar-brand fs-5 fw-bold text-white" href="/">
                        MILTON
                    </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link active fs-5 fw-bold me-5 text-white" aria-current="page" href="/home">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 fw-bold me-5 text-white" href="/about">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 fw-bold me-5 text-white" href="/project">
                                Project
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 fw-bold me-5 text-white" href="/blog">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 fw-bold me-5 text-white" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1bdBM-6GNFBCwcpgiaaB0BbJiGPuoo43T/view?usp=sharing" >
                        <button class="resume-btn"><FaArrowDown /> RESUME</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;