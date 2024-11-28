import React from 'react';
import { useSelector } from 'react-redux';
import './Takeaway.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Takeaway = () => {
    const { title, description, appLinks, image } = useSelector((state) => state.takeaway);

    return (
        <div className="takeaway-container">
            <div className="takeaway-left">
                <h4>TAKE AWAY</h4>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="app-buttons">
                    <a href={appLinks.appStore} className="app-button app-store">
                        <i className="bi bi-apple"></i>

                         <text> App Store</text>
                    </a>
                    <a href={appLinks.googlePlay} className="app-button google-play">
                        <i className="bi bi-google-play"></i>
                        <text> Google Play</text>
                    </a>
                </div>
            </div>
            <div className="takeaway-right">
                <img src={image} alt="Phone Mockup" className="takeaway-image" />
            </div>
        </div>
    );
};

export default Takeaway;
