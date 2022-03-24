import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Slider.css';
import One from '../../images/car1.jpg';
import Two from '../../images/car2.jpg';
import Three from '../../images/car3.jpg';
import Four from '../../images/car4.jpg';
import Five from '../../images/car5.jpg';
import Six from '../../images/car6.jpg';


function Slider() {
    return (
        <div className="slider">
        <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav
        dots
        loop
        >
            <div className="item">
                <img src={One} alt="" />
            </div>
            <div className="item">
                <img src={Two} alt="" />
            </div>
            <div className="item">
                <img src={Three} alt="" />
            </div>
            <div className="item">
                <img src={Four} alt="" />
            </div>
            <div className="item">
                <img src={Five} alt="" />
            </div>
            <div className="item">
                <img src={Six} alt="" />
            </div>
        </OwlCarousel>
        </div>
    )
}

export default Slider