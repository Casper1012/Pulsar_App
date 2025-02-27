import React from 'react';
import Header from '../components/layout/Header';   
import Footer from '../components/layout/Footer';
import MainContent from '../components/landing/MainContent';

const Landing = () => {
    return (
        <div className='w-full h-full'>
            <Header />
            <MainContent />
            <Footer />  
        </div>
    );
};  

export default Landing;
