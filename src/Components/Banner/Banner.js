import React from 'react';
import './Banner.css'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <div className='container mt-5 mb-5'>
            <MDBCarousel showControls showIndicators>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active first-carousel-item rounded-3'>
                        <div>
                            <div className='carousel-text'>
                                <p className='text-white-50'>Welcome to</p>
                                <h1 className='carousel-title fw-bolder text-white'>PICSQUARE</h1>
                                <p className='text-white-50'>I love to pause the wild,<br /> happy and real moments of life, just to hear their stories untold.</p>
                                <button className='btn btn-outline-light rounded-pill  fw-bold p-3'>My Works</button>
                                <button className='btn btn-outline-dark text-white rounded-pill fw-bold  ms-3 p-3'>Contact Me</button>
                            </div>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem className='second-carousel-item rounded-3'>
                        <div className='carousel-text'>
                            <p className='text-white-50'>Hello there I'm</p>
                            <h1 className='carousel-title fw-bolder text-white'>Juhayer Ayaz</h1>
                            <p className='text-white-50'>I am professional photographer based on Bangladesh, <br />creating dreamscapes with black, white and shades in-between.</p>
                            <button className='btn btn-outline-light rounded-pill  fw-bold p-3'>My Works</button>
                            <button className='btn btn-outline-dark text-white rounded-pill fw-bold  ms-3 p-3'>Contact Me</button>
                        </div>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}