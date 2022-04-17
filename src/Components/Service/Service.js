import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className={`col-md-4 border-${id}`}>
            <div className='item'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-outline-light mt-4'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;