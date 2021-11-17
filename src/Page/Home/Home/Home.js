import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Navigation/Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import Doctors from '../Doctors/Doctors';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;