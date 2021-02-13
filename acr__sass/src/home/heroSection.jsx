import React from 'react';
import heroImg from "./images/heroImage.jpg"

function HeroSection(props) {
    return (
        <React.Fragment>
            <div className="heroSection">
                <div className="heroSection--left">
                    <p>Welcome to ACR <small>Management Tool</small>.</p>
                    <p>Serving thousands of companies around the world, eramba is a popular open Governance, Risk and Compliance (GRC) solution</p>
                    <p>Latest Enterprise Release - January 21, 2021<br/>Latest Community Release - October 21, 2019</p>
                </div>
                <div className="heroSection--right">
                    <div className="heroSection--right__image">
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeroSection;