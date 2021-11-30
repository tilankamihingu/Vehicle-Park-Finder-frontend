import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AboutImage from '../../images/about.jpg'

const Home = () => {
    return (
        <div className="full">
            <div className="home-container">
                <div className="home-content">
                    <h1>Find a park you want</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident<br /> itaque sit nostrum impedit unde illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero?</p>
                    <div className="content-btn">
                        <Link to = "/parks"><button className="view">View Parks</button></Link>
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-details">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque quia iste totam nam soluta alias facere, eos accusamus assumenda, voluptas sit nihil corrupti! Rem sit unde cumque alias sint!</p>
                    </div>
                    <div className="about-image">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
