import React from 'react';
import { useSelector } from 'react-redux';
import { selectAbout } from '../redux/slices/aboutSlice';
import "./About.css"
const About = () => {
    const aboutData = useSelector(selectAbout);

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src={aboutData.image} alt="Person eating salad" />
                </div>
                <div className="about-content">
                    <h3>About Us</h3>
                    <h2>{aboutData.title}</h2>
                    <p>{aboutData.description}</p>
                    <button className="read-more-button">{aboutData.buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default About;
