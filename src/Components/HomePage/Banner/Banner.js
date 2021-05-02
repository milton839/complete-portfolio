import React from 'react';
import './Banner.css';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaArrowDown } from 'react-icons/fa';
import banner_image from '../../../images/banner_img.jpg';
import Header from '../../Shared/Header/Header';

const Banner = () => {
    return (
        <div className="section">
            <Header></Header>
            <div className="banner container py-5">
                <div className="row align-items-center py-5 px-5">
                    <div className="col-lg-8 banner-content">
                        <h6>HELLO!</h6>
                        <h2>I AM MILTON</h2>
                        <p>I am a javascript developer. Working in the software industry with the latest
                            web technology of various local and multinational software / IT agencies in Bangladesh and
                            growing rapidly with increasing responsibilities.</p>
                        <div class="banner-social wow fadeInUp" data-wow-delay="0.8s">
                                    <ul>
                                        <li>
                                            <a target="_blank" href="https://www.facebook.com/">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/in/azizul-milton-8774b81b4/">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/milton839">
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.instagram.com/bmt_milton/?hl=en">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <a target="_blank" href="https://drive.google.com/file/d/1bdBM-6GNFBCwcpgiaaB0BbJiGPuoo43T/view?usp=sharing" class="btn wow fadeInUp resume-download" data-wow-delay="1s">
                                    <FaArrowDown /> DOWNLOAD RESUME
                                    </a>
                    </div>
                    <div className="col-lg-4">
                        <img src={banner_image} className="img-fluid  pt-5 w-75" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;