import React from 'react';
import about from './about.jpg'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <div>
            <section className='banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay' data-overlay-darkgray="1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ">
                            <h1>About Me</h1>
                            <hr class="border-1" />
                            <p>I'm a noob web-developer, Trying to learn web developing.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about section-padding bg-black-about">
                <div class="container">
                    <div class="row text-white-50">
                        <div class="col-md-5 mb-30">
                            <p>I'm very determined to complete my journey of learning web-developing and then start working on real projects and start creating my own site.</p>
                            <p class="mb-30">To achieve this goal I am making so many sacrifices and investing so much time. I dream to have my own company like facebook/twitter/google</p>
                            <ul class="list-unstyled about-list mb-30">
                                <li>
                                    <div class="about-list-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div class="about-list-text">
                                        <p>Fresh Talent</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="about-list-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div class="about-list-text">
                                        <p>20+ successfully done projects</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="about-list-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div class="about-list-text">
                                        <p>Exceptional work quality</p>
                                    </div>
                                </li>
                            </ul>
                            <hr class="border-1" />
                            <div class="">
                                <div class="">
                                    <div class="text-white fs-4">JUHAYER AIAZ</div>
                                    <div class="fs-6">Founder of PICSQUARE</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 offset-md-2 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
                            <div class="about-img">
                                <div class="img"> <img src={about} class="img-fluid" alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;