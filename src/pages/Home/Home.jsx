import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../component/Slider/Slider';
import './Home.css';

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
                    <h1>Get to know Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus illum praesentium, atque possimus quos, esse nulla quae quod provident temporibus animi! Totam quod nesciunt mollitia iusto deserunt culpa at!</p>
                </div>
            </div>
            <div className="category-container">
                <Slider />
            </div>
            <div className="contact-container" id="contact">
                <div className="contact-left">
                    <div className="left-content">
                        <h1>Contact us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in distinctio, ut praesentium aperiam accusantium?</p>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Your Email" />
                        <textarea name="" id="" cols="10" rows="8" placeholder="Enter your message" />
                        <button className="contact-submit">submit</button>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="right-content">
                        <p>hhvgjkhbkbk</p>
                        <p>ikjhk</p>
                        <p>hvkjbkjnblkljkn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
