import React, { useState, useEffect } from 'react';
import spacexhq from "../images/sapcexhq.png";
import capsule from "../images/capsule.jpeg";
import landing from "../images/landing.webp";
import rocket from "../images/rocket.jpeg";
import starship from "../images/starship.avif";
import './Herosection.css';
import Navbar from '../navbar/Navbar';

function Herosection() {
    const images = [spacexhq, capsule, starship, landing, rocket];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="whole pt-4 rounded-sm pb-28">
            <Navbar />
            <div className='py-2 object-none items-center'>
                <div className="image-container">
                    <img src={images[currentIndex]} alt='carousel' className='carousel-image rounded-md' />
                </div>
            </div>
            <div className="container">
                <div className="sky">
                    <div className="stars"></div>
                    <div className="stars1"></div>
                    <div className="stars2"></div>
                    <div className="shooting-stars"></div>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
