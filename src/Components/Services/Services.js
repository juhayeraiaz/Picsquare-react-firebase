import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <>
            <section class="services section-padding bg-black">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 mb-30 text-center">
                            <h2 class="section-title"><span>My Services</span></h2>
                            <p class="section-title2">Since I have been working for many days in this field. I have so much to offer. Below this, You can see all my services that I provide.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 border-1">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-1.svg" alt="" />
                                <h5>Photography</h5>
                                <p>I will do professional Photography as you want.</p>
                            </div>
                        </div>
                        <div class="col-md-4 border-2">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-2.svg" alt="" />
                                <h5>Videography</h5>
                                <p>We have High tech cameras to shoot 4K videos with extraordinary talents.</p>
                            </div>
                        </div>
                        <div class="col-md-4 border-3">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-3.svg" alt="" />
                                <h5>Photo Retouching</h5>
                                <p>We do retouch photos to make clients look best for any occassions.</p>
                            </div>
                        </div>
                        <div class="col-md-4 border-4">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-4.svg" alt="" />
                                <h5>WildLife Photography</h5>
                                <p>We also do WildLife photography for clients who love wild life photos.</p>
                            </div>
                        </div>
                        <div class="col-md-4 border-5">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-5.svg" alt="" />
                                <h5>Lightning Setup</h5>
                                <p>We have all type of lighting setup available with us to shoot better photos and record better videos.</p>
                            </div>
                        </div>
                        <div class="col-md-4 border-6">
                            <div class="item"> <img src="http://duruthemes.com/demo/html/phoxel/main/img/icons/icon-6.svg" alt="" />
                                <h5>Video Color Grading</h5>
                                <p>We will do tweaking to adjust color and make cinematic shots more cool and better.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;