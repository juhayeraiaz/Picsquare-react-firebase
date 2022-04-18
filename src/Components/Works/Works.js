import React from 'react';
import './Works.css'
const Works = () => {
    return (
        <div>
            <section class="banner-header banner-img banner-img-top section-padding valign bg-img bg-fixed banner-overlay" data-overlay-darkgray="1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ">
                            <h1>My works</h1>
                            <hr class="border-1" />
                            <p>These are some of my works. I mostly like to take wild photos so I'm featuring wild photos more.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* works gallery */}
            <div className='gallery pb-5 pt-5'>
                <div class="container mt-5 mb-5">
                    <div class="row g-5">
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-1'>
                                <div className='text-center gallery-text'>
                                    <h1>Organized Desk</h1>
                                    <p>Black Sony Dslr Camera Beside Brown Notebook</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-2'>
                                <div className='text-center gallery-text'>
                                    <h1>Sunset</h1>
                                    <p>Man Standing on Rock Formation</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-3'>
                                <div className='text-center gallery-text'>
                                    <h1>Close Shot</h1>
                                    <p>Clear Shot Glass With Tennis Ball</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-4'>
                                <div className='text-center gallery-text'>
                                    <h1>Pigeons</h1>
                                    <p>Selective Focus Photo of Green Pigeon</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-5'>
                                <div className='text-center gallery-text'>
                                    <h1>Butterflies</h1>
                                    <p>Close-up Photo of Glowing Blue Butterflies</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div className='rounded-3 gallery-photo-6'>
                                <div className='text-center gallery-text'>
                                    <h1>Bokeh Shot</h1>
                                    <p>Person Holding Black Dslr Camera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;