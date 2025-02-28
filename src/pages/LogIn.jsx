import React from 'react';
import Header from '../components/layout/Header';
import MainContent from '../components/login/MainContent';

const LogIn = () => {
    return (
        <div className='w-full min-h-screen'>
            <Header />
            <MainContent />
        </div>
    );
};

export default LogIn;