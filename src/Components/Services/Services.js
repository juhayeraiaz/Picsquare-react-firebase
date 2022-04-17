import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
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
                    <div className='row'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;