import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './navbar';
import HeroSection from "./heroSection";
import EcommercePage from './pricingSection';

function LandingPage({handleView}) {
    return (
        <div >
             <Navbar handleView={handleView}/>
             <HeroSection />
             {/* <EcommercePage /> */}
        </div>
    );
}

export default LandingPage;